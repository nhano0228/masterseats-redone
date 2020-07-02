from flask_login import UserMixin
from app import db

class User(UserMixin, db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key = True)
    first = db.Column(db.String, nullable = False)
    last = db.Column(db.String, nullable = False)
    email = db.Column(db.String, nullable = False)
    username = db.Column(db.String, nullable = False)
    password = db.Column(db.String, nullable = False)
    venmo = db.Column(db.String, nullable = True, default = None)
    confirmed = db.Column(db.Boolean, nullable = True, default = False)

    def __init__(self, first, last, email, username, password, venmo, confirmed):
        self.first = first
        self.last = last
        self.email = email
        self.username = username
        self.password = password
        self.venmo = venmo
        self.confirmed = confirmed


class Ticket(db.Model):
    __tablename__ = "tickets"
    id = db.Column(db.Integer, primary_key = True)
    type = db.Column(db.String, nullable = False)
    username = db.Column(db.String, nullable = False)
    game = db.Column(db.String, nullable = False)
    tickets = db.Column(db.Integer, nullable = True)
    price = db.Column(db.Integer, nullable = False)
    section = db.Column(db.String, nullable = True)

def __init__(self, type, username, game, tickets, price, section):
    self.type = type
    self.username = username
    self.game = game
    self.tickets = tickets
    self.price = price
    self.section = section
