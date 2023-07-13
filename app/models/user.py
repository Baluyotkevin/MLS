from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .loves import love
from .favorites import favorite


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_img = db.Column(db.String(90), nullable=False)
    first_name = db.Column(db.String(40), nullable=False)
    last_name = db.Column(db.String(40), nullable=False)
    
    user_posts = db.relationship("Post", back_populates='user', cascade='all, delete')
    user_comments = db.relationship("Comment", back_populates='user', cascade='all, delete')
    user_loves = db.relationship("Post", secondary=love, back_populates='post_loves', cascade='all, delete')
    user_favorites = db.relationship("Post", secondary=favorite, back_populates='post_favorites', cascade='all, delete')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'profile_img': self.profile_img,
            'first_name': self.first_name,
            'last_name': self.last_name,
            # "post_loves": [post.id for post in self.user_loves],
            # "favorites": [post.id for post in self.user_favorites]
        }
