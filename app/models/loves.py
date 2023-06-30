from .db import db

love = db.Table(
    'loves',
    db.Model.metadata,
    db.Column("users", db.Integer, db.ForeignKey("users.id"), primary_key=True),
    db.Column("posts", db.Integer, db.ForeignKey("posts.id"), primary_key=True)
)