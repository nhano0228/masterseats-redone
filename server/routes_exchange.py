import flask
from app import app, db
from flask import redirect, url_for, render_template, session, request, flash
from routes_login import LoginForm
from sqlalchemy import *
from sqlalchemy.exc import SQLAlchemyError
from flask_login import current_user, login_required
from models import Ticket

def session_pop(*keys):
    for key in keys:
        session.pop(key)

@app.route("/exchange/<type>", methods = ["GET"])
def exchange_get(type):
    if "game" in session.keys():
        session.game = session["game"]
        session.price = session["price"]
        session.section = session["section"]
        session.venmo = session["venmo"]
    return render_template("exchange.html", type=type)


@app.route("/exchange/<type>", methods = ["POST"])
def exchange_post(type):

    session["game"] = request.form.get('game')
    session["price"] = request.form.get('price')
    session["section"] = request.form.get('section')
    session["venmo"] = request.form.get('venmo')

    if current_user.is_authenticated:

        #Add ticket to tickets db
        ticket = Ticket(
            username=current_user.username,
            type=type,
            game=request.form.get('game'),
            price=request.form.get('price'),
            section=request.form.get('section'),
            )

        db.session.add(ticket)
        db.session.commit()


        #add venmo handle to users db
        venmo = request.form.get("venmo")
        current_user.venmo = venmo
        db.session.commit()


        session_pop("game", "price", "section", "venmo")

        #Matching algorithm
        if type == "buying":
            ticket_matches = Ticket.query.filter(and_(
                Ticket.type == "selling",
                Ticket.game == ticket.game,
                Ticket.price <= int(ticket.price) + 5
                )).all()

            game_tickets = Ticket.query.filter(and_(
                Ticket.type == "selling",
                Ticket.game == ticket.game)).all()

            return render_template("match.html",
                type = type,
                matches = len(ticket_matches),
                ticket_matches = ticket_matches,
                game = ticket.game,
                min_price = str(min([ticket.price for ticket in game_tickets])))

        elif type == "selling":
            return render_template("match.html",
                type = "selling",
                game = ticket.game)

    else:
        flash("Please register so we can make sure you're a student", "danger")
        return redirect(f'/signup?next=%2Fexchange%2F{type}')
