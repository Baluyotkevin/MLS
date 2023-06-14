from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Post
from ..forms.post_form import PostForm
from ..models import db

post_routes = Blueprint('posts', __name__, url_prefix='')


@post_routes.route('/')
def posts():
    """
    Query for all posts
    """
    posts = Post.query.all()
    return { 'posts': [post.to_dict() for post in posts] }

@post_routes.route('/')
@login_required
def user_all_posts():
    """
    Query for all of current users posts
    """
    all_posts = Post.query.filter(Post.user_id == current_user.id).all()
    new_all_posts = [post.to_dict() for post in all_posts]
    return new_all_posts

@post_routes.route('/<int:id>')
@login_required
def user_post(id):
    """Gets One post by its id"""
    single_post = Post.query.get(id)
    return single_post

@post_routes.route('/post', methods=['POST'])
@login_required
def create_post():
    form = PostForm()
    form["csrf_token"].data=request.cookies["csrf_token"]
    print('tHIS BE MY FOOOORM ====================')
    print("====================do i get in here")
    if form.validate_on_submit():
        new_post=Post(
            title = form.data['title'],
            body = form.data['body'],
            user_id = current_user.id,
            category = form.data['category'],
            root_post_id = -1,
            parent_id = -1,
            anonymous = form.data['anonymous']
        )
        db.session.add(new_post)
        db.session.commit()
        return new_post.to_dict()
    return {'hello'}
@post_routes.route('/<int:id>/post', methods=['POST'])
@login_required
def create_post_on_post(id):
    """
    Post on the homepage
    """

    post = Post.query.get(id)
    # root_post_id = id
    print(post.root_post_id)
    if post.root_post_id == -1:
        root_id = post.id
    else:
        root_id = 

    form = PostForm()
    form["csrf_token"].data=request.cookies["csrf_token"]
    if form.validate_on_submit():
        new_post=Post(
            title = form.data['title'],
            body = form.data['body'],
            user_id = current_user.id,
            category = post.category,
            root_post_id = root_id,
            parent_id = id,
            anonymous= form.data['anonymous'],
            # created_at = form.data['created_at']
        )
        db.session.add(new_post)
        db.session.commit()
        return new_post.to_dict()

@post_routes.route('/<int:id>/edit', methods=['PUT'])
@login_required
def edit_post(id):
    postObj = Post.query.get(id)
    # post = postObj.to_dict()
    form = PostForm()
    form["csrf_token"].data=request.cookies["csrf_token"]
    if postObj.user_id == current_user.id:

        postObj.title = form.data['title']
        postObj.body = form.data['body']
        postObj.anonymous = form.data['anonymous']

        db.session.commit()
        return postObj.to_dict()
    return {"message": "You cannot edit this post as it does not belong to you"}

@post_routes.route('/<int:id>/delete', methods=['DELETE'])
@login_required
def delete_post(id):
    postObj = Post.query.get(id)
    # print("THIS IS MY IDDDD ===========", id)
    # print("MY POST OBJ =====", postObj.user_id)
    
    if not postObj:
        return {"message": "This post does not exist"}
    
    if postObj.user_id == current_user.id:

        if postObj.root_post_id == -1:
            allPost = Post.query.filter(Post.root_post_id == id).all()
            print('THIS BE MY ALLL POST-----', allPost)
            for post in allPost:
                db.session.delete(post)
            db.session.delete(postObj)
            db.session.commit()
            print('hellloooo==========')
            return {"message": "Post successfully deleted"}

        print('THISSS =============')
        db.session.delete(postObj)
        db.session.commit()
        return {"message": "Post successfully deleted"}
    
    return {"message": "You cannot delete this post as it does not belong to you"}
    

