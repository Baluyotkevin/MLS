from app.models import db, Post, environment, SCHEMA
from sqlalchemy.sql import text

def seed_posts():
    post1 = Post(
        title='love', body="Rubidium, August, and September— And when you cried out, O, Prometheans, didn't they bring fire? These hands, if not gods, then why when you have come to me, and I have returned you to that from which you came—bright mud, mineral-salt—why then do you whisper O, my Hecatonchire. My Centimani. My hundred-handed one?", user_id = 1, category = 'Beautiful', root_post_id = 1, anonymous=False
    )
    post2= Post(
        title='ConLove', body="Haven't they riveted your wrists, haven't they had you at your knees? And when these hands touched your throat, showed you how to take the apple and the rib, how to slip a thumb into your mouth and taste it all, didn't you sing out their ninety-nine names—", user_id = 1, category = 'Horrible', root_post_id = 1,
        parent_id = 1, anonymous=False
    )

    db.session.add(post1)
    db.session.add(post2)
    db.session.commit()

def undo_posts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM posts"))
        
    db.session.commit()