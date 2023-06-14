from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, BooleanField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Post

class PostForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    body = TextAreaField('Body', validators=[DataRequired()])
    anonymous = BooleanField('Anonymous', validators=[DataRequired()])
    category = SelectField('Category', choices=['Horrible', 'Beautiful'], validators=[DataRequired()])


