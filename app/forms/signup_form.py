from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User
from flask_wtf.file import FileField, FileAllowed, FileRequired
from ..api.AWS_helpers import ALLOWED_EXTENSIONS

def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')
    
def password_length(form, field):
    # Checking if password is 8 characters long
    password = field.data
    if len(password) < 8:
        raise ValidationError('Please enter a password 8 characters long')


class SignUpForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), username_exists])
    email = StringField('Email', validators=[DataRequired(), user_exists, Email()])
    password = StringField('Password', validators=[DataRequired(), password_length])
    profile_img = FileField("Image File", validators=[DataRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))]) 
# default='https://kevinbawsbucket.s3.us-west-1.amazonaws.com/heart+model.png')
    first_name = StringField('first_name', validators=[DataRequired()])
    last_name = StringField('last_name', validators=[DataRequired()])