from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from ..models import db, Comment

comment_routes = Blueprint('comments', __name__, url_prefix='')

@comment_routes.route('/')
def comments():
    """
    Query for all comments
    """
    comments = Comment.query.all()
    return [comment.to_dict() for comment in comments]

@comment_routes.route('/current')
@login_required
def current_user_comments():
    """
    Query for all users comments
    """

    all_comments = Comment.query.filter(Comment.user_id == current_user.id).all()
    new_all_comments = [comment.to_dict() for comment in all_comments]
    return new_all_comments

@comment_routes.route('/<int:id>')
@login_required
def user_post(id):
    """Gets One post by its id"""
    single_comment = Comment.query.get(id)
    return single_comment
