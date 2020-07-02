import os
import braintree
import flask
from app import app, db
from flask import Flask, redirect, url_for, render_template, request, flash, redirect, url_for, session
from os.path import join, dirname
from dotenv import load_dotenv
from gateway import generate_client_token, transact, find_transaction
from flask_login import current_user, login_required
from models import Ticket

load_dotenv()

TRANSACTION_SUCCESS_STATUSES = [
    braintree.Transaction.Status.Authorized,
    braintree.Transaction.Status.Authorizing,
    braintree.Transaction.Status.Settled,
    braintree.Transaction.Status.SettlementConfirmed,
    braintree.Transaction.Status.SettlementPending,
    braintree.Transaction.Status.Settling,
    braintree.Transaction.Status.SubmittedForSettlement
]

@app.route('/checkout/<ticket_id>', methods=['GET', 'POST'])
@login_required
def new_checkout(ticket_id):
    session['chosen_ticket'] = Ticket.query.get(ticket_id)
    client_token = generate_client_token()
    return render_template('checkout.html', client_token=client_token, chosen_ticket = session['chosen_ticket'])

@app.route('/validation', methods=['POST'])
def create_checkout():
    result = transact({
        'amount': session['chosen_ticket'].price,
        'payment_method_nonce': request.form['payment_method_nonce'],
        'options': {
            "submit_for_settlement": True
        }
    })

    if result.is_success or result.transaction:
        return redirect(url_for('show_checkout', transaction_id=result.transaction.id), code = 307)
    else:
        return "Something went wrong, please try again"
        '''
        for x in result.errors.deep_errors: flash('Error: %s: %s' % (x.code, x.message), "danger")
        return redirect(url_for('new_checkout', ticket_id = session['chosen_ticket'].id))
        '''

@app.route('/checkouts/<transaction_id>', methods = ['POST'])
def show_checkout(transaction_id):
    transaction = find_transaction(transaction_id)
    result = {}
    if transaction.status in TRANSACTION_SUCCESS_STATUSES:
        return redirect(url_for('order_confirmation', ticket_id = session['chosen_ticket'].id), code = 307)
    else:
        return render_template("response_page.html", message = "Transaction failed. Please try again")
