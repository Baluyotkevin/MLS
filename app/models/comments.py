from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Comment(db.Model):
    __tablename__ = 'comments'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(80), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    post_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("posts.id")))
    created_at = db.Column(db.DateTime(), default=datetime.now)

    user = db.relationship("User", back_populates='user_comments')
    post = db.relationship("Post", back_populates='post_comments')

    def to_dict(self):
        return {
            "id": self.id,
            "body": self.body,
            "user_id": self.user_id,
            "post_id": self.post_id,
            "created_at": self.created_at,
            "user": self.user.to_dict(),
            "post": self.post.to_dict()
        }