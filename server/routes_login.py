from app import app, db
from flask import session, redirect, render_template, url_for, request, flash
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField
from wtforms.validators import InputRequired, Email, Length, ValidationError
from werkzeug.security import generate_password_hash, check_password_hash
from flask_mail import Mail, Message
from itsdangerous import URLSafeTimedSerializer, SignatureExpired
from flask_login import LoginManager, login_user, login_required, logout_user, current_user
from models import User
import urllib.parse

s = URLSafeTimedSerializer(app.config['SECRET_KEY'])
mail = Mail(app)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

#umich email validator
def umich_domain(form, field):
    email = field.data
    if email[-10:] != "@umich.edu":
        raise ValidationError("Make sure to use your umich email")

def return_next():
    if session['next'] == '':
        return redirect(url_for('login'))
    else:
        return redirect(f"/login?next={session['next']}")

class LoginForm(FlaskForm):
    username = StringField('Username', validators = [InputRequired(), Length(min=1, max=30)])
    password = PasswordField('Password', validators = [InputRequired(), Length(min=1, max=80)])

class RegisterForm(FlaskForm):
    first = StringField('First Name', validators = [InputRequired(), Length(min=1, max=80)], render_kw={"placeholder": "First Name"})
    last = StringField('Last Name', validators = [InputRequired(), Length(min=1, max=80)], render_kw={"placeholder": "Last Name"})
    email = StringField('Email', validators = [InputRequired(), Email(message = 'Invalid Email'), Length(max=50)], render_kw={"placeholder": "cooluniqname@umich.edu"})
    username = StringField('Username', validators = [InputRequired(), Length(min=1, max=15)], render_kw={"placeholder": "Username"})
    password = PasswordField('Password', validators = [InputRequired(), Length(min=5, max=80)], render_kw={"placeholder": "Password"})

@app.route("/login", methods = ["POST", "GET"])
def login():

    form = LoginForm()

    if form.validate_on_submit():
        current_user = User.query.filter_by(username = form.username.data).first()
        if current_user:
            if current_user.confirmed == True:
                if check_password_hash(current_user.password, form.password.data):
                    login_user(current_user)
                    flash(f"Welcome {current_user.first}!", "success")

                    '''
                    if not is_safe_url(next, {'http://127.0.0.1:5000/'}):
                        return abort(400)
                    '''

                    return redirect(request.args.get("next") or url_for('index'))
                else:
                    flash("We don't recognize that password. Please try again", "danger")
                    return return_next()
            else:
                flash("You need to confirm your email first. Check your email for a confirmation link", "danger")
                return return_next()

        else:
            flash("We don't recognize that username. Please try again", "danger")
            return return_next()

    return render_template('login.html', form = form)

@app.route('/signup', methods = ["GET"])
def signup_get():

    form = RegisterForm()

    #If user is redirected to signup page, store next args into variable next, if not next = ''
    next = request.args.get("next") or ''
    session['next'] = str(urllib.parse.quote(next, safe = ''))#Url encode next and store it as a session

    return render_template('signup.html', form = form)

@app.route('/signup', methods = ["POST"])
def signup_post():

    form = RegisterForm()

    if form.validate_on_submit():

        user = User(
            first = form.first.data,
            last = form.last.data,
            email = form.email.data,
            username = form.username.data,
            password = generate_password_hash(form.password.data, method = 'sha256'),
            confirmed = False,
            venmo = None
            )

        db.session.add(user)
        db.session.commit()
    

        '''Confirm Email'''
        token = s.dumps(user.email, salt='email-confirmation')
        msg = Message('Confirm your Email for TicketChange', recipients = [user.email])
        link = url_for('confirm_email', token = token, _external = True)
        msg.html = render_template("/email_templates/signup_confirmation.html", user = user, link = link)
        mail.send(msg)

        return render_template("response_page.html",
            message = "We know email confirmations suck, but we do it for you - \
            to make sure everyone on the platform is a student. Please check your email for a confirmation link ")

    else:
        flash("Sign up info didn't validate correctly. Please try again.", "danger")
        return render_template('signup.html', form = form)

@app.route('/confirm_email/<token>')
def confirm_email(token):
    try:
        email = s.loads(token, salt='email-confirmation')
    except SignatureExpired:
        return "Token expired"

    user = User.query.filter_by(email=email).first_or_404(
        description = "ERROR CODE B: Sorry! We can't send you a confirmation email. Please tell the TicketChange team")
    try:
        user.confirmed = True
        db.session.commit()
    except:
        return render_template("response_page.html",
            message = "ERROR CODE 5: Something went wrong and we couldn't \
            confirm your email. Please try again and then tell the TicketChange team.")

    flash(f"We've confirmed your email {user.first}. Go ahead and log in!", "success")
    return return_next()

@app.route("/forgot-password", methods = ["GET", "POST"])
def forgot_password():

    if request.method == "POST":
        email = request.form.get("email")

        '''Reset Password Email'''
        token = s.dumps(email, salt='change-password')
        msg = Message('Reset you TicketChange password', recipients = [email])
        link = url_for('change_password', token = token, _external = True)
        msg.html = render_template("/email_templates/password-reset.html", email = email, link = link)
        mail.send(msg)

        return render_template('signup-response.html')

    else:
        return render_template('forgot_password.html')

@app.route("/change-password/<token>", methods = ["GET", "POST"])
def change_password(token):
    if request.method == "POST":
        try:
            email = s.loads(token, salt='change-password')
        except SignatureExpired:
            return "Token expired"

        user = User.query.filter_by(email=email).first_or_404(
            description = "ERROR CODE B: Sorry! We can't send you a confirmation email. Please tell the TicketChange team")
        try:
            user.password = generate_password_hash(request.form.get("password"), method = 'sha256')
            db.session.commit()
        except:
            return render_template("response_page.html",
                message = "ERROR CODE 5: Something went wrong and we couldn't \
                confirm your email. Please try again and then tell the TicketChange team.")

        flash(f"We've changed your password {user.first}. Go ahead and log in!", "success")
        return redirect(url_for('login'))

    else:
        link = url_for('change_password', token = token)
        return render_template('change-password.html', link = link)

@app.route("/logout")
@login_required
def logout():
    session.clear()
    logout_user()
    return redirect(url_for('index'))
