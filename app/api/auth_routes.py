from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from .AWS_helpers import upload_file_to_s3, remove_file_from_s3, get_unique_filename
from datetime import date


auth_routes = Blueprint('auth', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print(' THIS BE MEEEE =========================')
    if form.validate_on_submit():

        # profile_img=form.data['profile_img']
        # profile_img.filename = get_unique_filename(profile_img.filename)
        # upload = upload_file_to_s3(profile_img)
        # if "url" not in upload:
        #     return upload['errors']
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
            # return 'hello'

        user = User(
            username=form.data['username'],
            email=form.data['email'],
            profile_img = form.data['profile_img'],
            password=form.data['password'],
            first_name=form.data['first_name'],
            last_name=form.data['last_name']
        )
        print('Do i get created ?? ========>', user)
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@auth_routes.route('/<int:id>/current', methods=['PUT'])
@login_required
def edit_user(id):
    user = User.query.get(id)
    form = SignUpForm()
    form["csrf_token"].data=request.cookies["csrf_token"]
    profile_img=form.data['profile_img']
    profile_img.filename = get_unique_filename(profile_img.filename)
    upload = upload_file_to_s3(profile_img)

    if "url" not in upload:
            return upload['errors']

    user.username=form.data['username']
    user.profile_img = upload['url']
    user.first_name=form.data['first_name']
    user.last_name=form.data['last_name']

    db.session.commit()
    return user.to_dict()


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401