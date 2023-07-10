from .db import db, environment, SCHEMA, add_prefix_for_prod

favorite = db.Table(
    'favorites',
    db.Model.metadata,
    db.Column("users", db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), primary_key=True),
    db.Column("posts", db.Integer, db.ForeignKey(add_prefix_for_prod("posts.id")), primary_key=True)
    
)
if environment == "production":
        favorite.schema = SCHEMA