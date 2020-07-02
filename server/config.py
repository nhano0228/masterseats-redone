#SQL
SQLALCHEMY_DATABASE_URI = "postgres://lzobthstnysxoy:7404b778c5e3d89e0f2f918c6e170d83351d2dab57e4c5c36bbe83699f0773f9@ec2-18-235-20-228.compute-1.amazonaws.com:5432/d4dd2clgspm6c4"
SQLALCHEMY_TRACK_MODIFICATIONS = False
SECRET_KEY = "Packey123!"

#Sessions
SESSION_PERMANENT = False
SESSION_TYPE = "filesystem"

#Flask Mail
MAIL_SERVER = 'smtp.gmail.com'
MAIL_PORT = 587
MAIL_USE_TLS = True
MAIL_USE_SSL = False
MAIL_DEBUG = True
MAIL_USERNAME = 'ticketchange.michigan@gmail.com'
MAIL_PASSWORD = 'Packey123!'
MAIL_DEFAULT_SENDER = ("Elan from MasterSeats", "ticketchange.michigan@gmail.com")
MAIL_MAX_EMAILS = 5
MAIL_ASCII_ATTACHMENTS = False
