from .db import db

love = db.Table(
    'loves',
    db.Model.metadata,
    db.Column("User", db.Integer, db.ForeignKey("users.id"), primary_key=True),
    db.Column("Post", db.Integer, db.ForeignKey("posts.id"), primary_key=True)
)