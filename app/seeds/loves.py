# from app.models import db, User, environment, SCHEMA
# from app.models import love
# from sqlalchemy.sql import text


# # Adds a demo user, you can add other users here if you want
# def seed_loves():
#     love_arr = [ {"users": 2, "posts": 1}, {"users": 1, "posts": 2}, {"users": 1, "posts": 2}, {"users": 1, "posts": 2}, {"users": 1, "posts": 2}, {"users": 1, "posts": 2}, {"users": 1, "posts": 2}, {"users": 1, "posts": 2}, {"users": 1, "posts": 2}, {"users": 1, "posts": 2}, {"users": 1, "posts": 2}, {"users": 1, "posts": 2}, {"users": 1, "posts": 2}, {"users": 1, "posts": 2}, {"users": 1, "posts": 2}, {"users": 1, "posts": 2}, {"users": 1, "posts": 2}, {"users": 1, "posts": 2}, {"users": 1, "posts": 2}, {"users": 1, "posts": 2}, {"users": 1, "posts": 2}, {"users": 1, "posts": 2}, {"users": 1, "posts": 2}, {"users": 1, "posts": 2}
#     ]
#     inserting = love.insert().values(love_arr)
#     db.session.execute()
#     db.session.commit()


# # Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# # have a built in function to do this. With postgres in production TRUNCATE
# # removes all the data from the table, and RESET IDENTITY resets the auto
# # incrementing primary key, CASCADE deletes any dependent entities.  With
# # sqlite3 in development you need to instead use DELETE to remove all data and
# # it will reset the primary keys for you as well.
# def undo_users():
#     if environment == "production":
#         db.session.execute(f"TRUNCATE table {SCHEMA}.loves RESTART IDENTITY CASCADE;")
#     else:
#         db.session.execute(text("DELETE FROM loves"))
        
#     db.session.commit()