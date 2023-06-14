from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Category(db.Model):
    __tablename__ = 'categories'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40))
    created_at = db.Column(db.DateTime(), default=datetime.now)

