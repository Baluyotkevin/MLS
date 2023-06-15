from app.models import db, Comment, environment, SCHEMA
from sqlalchemy.sql import text

def seed_comments():
    comment1 = Comment(
        body='WOW you are such a romantic', user_id = 2, post_id = 1
    )
    comment2 = Comment(
        body='WOW this inspires me so much', user_id = 3, post_id = 1
    )
    comment3 = Comment(
        body='eh the first one was a much better story', user_id = 2, post_id = 2
    )
    comment4 = Comment(
        body='I think so too this was not it', user_id = 3, post_id = 2
    )

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.commit()

def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM comments"))
        
    db.session.commit()