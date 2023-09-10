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
        body='I think so too this was not it', user_id = 2, post_id = 4
    )
    comment5 = Comment(
        body='Wow, this is absolutely breathtaking!', user_id = 1, post_id = 8
    )
    comment6 = Comment(
        body="You've captured the essence perfectly!", user_id = 3, post_id = 8
    )
    comment7 = Comment(
        body="This is a masterpiece, well done!", user_id = 2, post_id = 8
    )
    comment8 = Comment(
        body="Incredible work, truly outstanding!", user_id = 4, post_id = 11
    )
    comment9 = Comment(
        body="I'm speechless, this is beyond amazing!", user_id = 1, post_id = 12
    )
    comment10 = Comment(
        body="Your talent shines through every detail.", user_id = 2, post_id = 11
    )
    comment11 = Comment(
        body="Your love story is a testament to the power of true love, truly remarkable!", user_id = 4, post_id = 8
    )
    comment12 = Comment(
        body="This love is pure and beautiful, truly heartwarming!", user_id = 2, post_id = 7
    )
    comment13 = Comment(
        body="Your love radiates warmth and fills hearts with joy.", user_id = 1, post_id = 9
    )
    comment14 = Comment(
        body="The depth of your love shines through in every word.", user_id = 2, post_id = 6
    )
    comment15 = Comment(
        body="Love can be so painfully fragile.", user_id = 2, post_id = 15
    )
    comment16 = Comment(
        body="Sorrow drowns in love's memories.", user_id = 1, post_id = 6
    )
    comment17 = Comment(
        body="Longing for a love that's gone.", user_id = 1, post_id = 18
    )
    comment18 = Comment(
        body="Love's absence feels like darkness.", user_id = 1, post_id = 5
    )
    comment19 = Comment(
        body="Broken hearts ache in silence.", user_id = 2, post_id = 5
    )
    comment20 = Comment(
        body="Heartache consumes love's remnants.", user_id = 2, post_id = 10
    )
    comment21 = Comment(
        body="Tears fall for lost love.", user_id = 4, post_id = 15
    )
    comment22 = Comment(
        body="Heartache consumes love's remnants.", user_id = 2, post_id = 4
    )
    comment23 = Comment(
        body="Love's promise turned to pain.", user_id = 4, post_id = 3
    )
    comment24 = Comment(
        body="Fading love, endless ache.", user_id = 2, post_id = 2
    )
    comment25 = Comment(
        body="Love's demise, tears flow.", user_id = 1, post_id = 3
    )
    comment26 = Comment(
        body="Lost love, shattered hopes remain.", user_id = 1, post_id = 6
    )
    comment27 = Comment(
        body="Wow, I cannot even fathom", user_id = 2, post_id = 16
    )


    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)
    db.session.add(comment9)
    db.session.add(comment10)
    db.session.add(comment11)
    db.session.add(comment12)
    db.session.add(comment13)
    db.session.add(comment14)
    db.session.add(comment15)
    db.session.add(comment16)
    db.session.add(comment17)
    db.session.add(comment18)
    db.session.add(comment19)
    db.session.add(comment20)
    db.session.add(comment21)
    db.session.add(comment22)
    db.session.add(comment23)
    db.session.add(comment24)
    db.session.add(comment25)
    db.session.add(comment26)
    db.session.add(comment27)
    db.session.commit()

def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM comments"))
        
    db.session.commit()