# from flask_wtf import FlaskForm
# from wtforms import StringField
# from wtforms.validators import DataRequired, Email, ValidationError
# from app.models import User
# from flask_wtf.file import FileField, FileAllowed, FileRequired
# from ..api.AWS_helpers import ALLOWED_EXTENSIONS

# class ProfileForm(FlaskForm):
#     profile_img = FileField("Image File", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))], default='https://kevinbawsbucket.s3.us-west-1.amazonaws.com/heart+model.png')
#     first_name = StringField('first_name', validators=[DataRequired()])
#     last_name = StringField('last_name', validators=[DataRequired()])