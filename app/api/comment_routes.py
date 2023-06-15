from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from ..models import db, Comment
from ..forms import CommentForm

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
def user_comment(id):
    """Gets One post by its id"""
    single_comment = Comment.query.get(id)
    return single_comment

@comment_routes.route('/<int:id>/edit', methods=['PUT'])
@login_required
def user_comment_edit(id):
    """Edits the comment"""
    single_comment = Comment.query.get(id)
    form = CommentForm()
    form["csrf_token"].data=request.cookies["csrf_token"]
    if single_comment.user_id == current_user.id:

        single_comment.body = form.data['body']
    
        db.session.commit()
        return single_comment.to_dict()
    return {"message": "You cannt edit this comment as it does not belong to you"}

@comment_routes.route('/<int:id>/delete', methods=['DELETE'])
@login_required
def user_comment_delete(id):
    """Deletes a current users comments"""
    comment = Comment.query.get(id)

    if not comment:
        return {"message": "This comment does not exist"}
    
    if comment.user_id == current_user.id:
        db.session.delete(comment)
        db.session.commit()
        return {"message": "Comment was successfully deleted"}
    return {"message": "You cannot delete this comment as it does not belong to you"}