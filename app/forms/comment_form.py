from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, BooleanField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Post

class CommentForm(FlaskForm):
    body = TextAreaField('Body', validators=[DataRequired()])