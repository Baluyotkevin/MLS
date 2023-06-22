from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password', first_name='Demo', last_name='demo', profile_img='https://kevinbawsbucket.s3.us-west-1.amazonaws.com/9395c115a982448b855ea7ad430eb58b.png')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password', first_name='Marnie', last_name='marnie', profile_img='https://kevinbawsbucket.s3.us-west-1.amazonaws.com/9395c115a982448b855ea7ad430eb58b.png')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', first_name='Bobbie', last_name='bobbie', profile_img='https://kevinbawsbucket.s3.us-west-1.amazonaws.com/9395c115a982448b855ea7ad430eb58b.png')
    kevin = User(
        username='kevinb', email='kevinb@aa.io', password='password', first_name='Kevin', last_name='B', profile_img='https://kevinbawsbucket.s3.us-west-1.amazonaws.com/kevinmiddle.jpeg')
    kevinL = User(
        username='kevinL', email='kevinl@aa.io', password='password', first_name='Kevin', last_name='L', profile_img='https://kevinbawsbucket.s3.us-west-1.amazonaws.com/9395c115a982448b855ea7ad430eb58b.png')
    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(kevin)
    db.session.add(kevinL)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
        
    db.session.commit()