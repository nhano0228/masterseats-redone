from app import app, db
from flask_mail import Mail, Message
from flask import render_template, redirect, session, url_for, request
from routes_login import User
from models import Ticket
from flask_login import current_user, login_required

mail = Mail(app)

def seller_transfer():
    seller = User.query.filter_by(username = session['chosen_ticket'].username).first()

    #Email to seller telling them to transfer ticket
    msg = Message('You Just Sold your Ticket', recipients=[seller.email])
    finished_link = url_for('transfer_confirmation', seller_id = seller.id, _external = True)
    msg.html = render_template("email_templates/seller_transfer.html",
        chosen_ticket = session['chosen_ticket'],
        finished_link = finished_link,
        seller = seller)
    mail.send(msg)


@app.route('/order-confirmation/', methods = ["GET", "POST"])
@login_required
def order_confirmation():
    #Prevents bad actors from typing in URL which would result if seller falsely being told they were paid
    if request.method == 'GET':
        return render_template('response_page.html', message = "You need to buy a ticket first")

    '''
    try:
        db.session.delete(session['chosen_ticket'])
        db.session.commit()
    '''

    #Sending order confirmation email
    msg = Message('MasterSeats Order Confirmation', recipients=[current_user.email])
    msg.html = render_template("email_templates/order_confirmation.html", chosen_ticket = session['chosen_ticket'])
    mail.send(msg)

    #Sends email to seller letting them know to transfer their ticket
    seller_transfer()

    return render_template("success.html",
        line1 = f"Success! Thanks for buying a ticket from MasterSeats, {current_user.first}",
        line2 = "We just sent you an email confirmation and will tell your seller to transfer you the ticket!",
        line3 = "We won't pay the seller until you've confirmed you received the ticket!")


@app.route('/transfer-confirmation/<seller_id>', methods = ["GET", "POST"])
def transfer_confirmation(seller_id):

    seller = User.query.get(seller_id)
    try:
        #Add seller's venmo to user object
        venmo = request.form.get("venmo")
        seller.venmo = venmo
        db.session.commit()
    except:
        return render_template("response_page.html",
            message = "ERROR CODE 7: Something went wrong and we couldn't add \
            your request. Please try again and then tell the MasterSeats team.")

    #Email to buyer letting them know ticket was transfered to them
    msg = Message('Your Ticket was Transfered to You', recipients=[current_user.email])
    finished_link = url_for('ticket_transferred', _external = True)
    msg.html = render_template("email_templates/transfer_confirmation.html",
        chosen_ticket = session['chosen_ticket'],
        finished_link = finished_link)
    mail.send(msg)
    session.pop('chosen_ticket')

    return render_template("success.html", #pass to route that updates users' venmo
        line1 = f"Thanks for transfering your ticket, {seller.first}",
        line2 = "We just emailed your buyer telling them to confirm the ticket transfer",
        line3 = "Once they confirm, we'll venmo you the ticket sale!")

@app.route('/ticket-transferred')
def ticket_transferred():
    return render_template('response_page.html', message = "Great! We're happy you got your ticket. Enjoy the game!")
