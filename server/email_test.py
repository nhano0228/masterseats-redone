from app import app
from flask_mail import Mail, Message
from flask import render_template, redirect, session, url_for, request

mail = Mail(app)

@app.route('/email_test')
def email_test():

    msg = Message('How does this email look', recipients=['xolak37362@whowlft.com'])
    msg.html = render_template("email_templates/email_test.html")
    mail.send(msg)
    return "Email Sent"
