from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, db
from ..forms import SignUpForm
# from .AWS_helpers import upload_file_to_s3, remove_file_from_s3, get_unique_filename


user_routes = Blueprint('users', __name__)


@user_routes.route('/')
# @login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()

# @user_routes.route('/current', methods=['PUT'])
# @login_required
# def edit_user():

#     form = SignUpForm()
#     form["csrf_token"].data=request.cookies["csrf_token"]
#     profile_img=form.data['profile_img']
#     profile_img.filename = get_unique_filename(profile_img.filename)
#     upload = upload_file_to_s3(profile_img)
#     if "url" not in upload:
#             return upload['errors']

#     if form.validate_on_submit():

#         edit_user = User(
#             username = current_user.username,
#             email = current_user.email,
#             password = current_user.password,
#             profile_img = upload['url'],
#             first_name=form.data['first_name'],
#             last_name=form.data['last_name']
#         )
#         db.session.add(edit_user)
#         db.session.commit()
#         return edit_user.to_dict()
    