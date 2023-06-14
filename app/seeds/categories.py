from app.models import db, Category, environment, SCHEMA
from sqlalchemy.sql import text


def seed_categories():
    horrible_love_stories = Category(
        name="Horrible"
    )
    nice_love_stories = Category(
        name='Beautiful'
    )

    db.session.add(horrible_love_stories)
    db.session.add(nice_love_stories)
    db.session.commit()


def undo_categories():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.categories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM categories"))
        
    db.session.commit()