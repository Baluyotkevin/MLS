from app.models import db, Post, environment, SCHEMA
from sqlalchemy.sql import text

def seed_posts():
    post1 = Post(
        title='love', body="Rubidium, August, and September— And when you cried out, O, Prometheans, didn't they bring fire? These hands, if not gods, then why when you have come to me, and I have returned you to that from which you came—bright mud, mineral-salt—why then do you whisper O, my Hecatonchire. My Centimani. My hundred-handed one?", user_id = 1, category = 'Beautiful', anonymous=False
    )
    post2 = Post(
        title='ConLove', body="Haven't they riveted your wrists, haven't they had you at your knees? And when these hands touched your throat, showed you how to take the apple and the rib, how to slip a thumb into your mouth and taste it all, didn't you sing out their ninety-nine names—", user_id = 1,category = 'Beautiful'
    )
    post3 = Post(
        title='CornyLove', body = "It is hard not to have faith in this from the blue-brown clay of nigh these two potters crushed and smoothed you into being—grind, then curve—built your form up—atlas of bone, fields of muscle, one breast a fig tree, the other a nightingale, both Morning and Evening.",
        user_id = 2, category = 'Beautiful'
    )

    post4 = Post (
        title='Ehh',
        body="And wasn't that good? Them at your hips— isn't this what God felt when he pressed together the first Beloved: Everything. Fever. Vapor. Atman. Pulsus. Finally, a sin worth hurting for. Finally, a sweet, a You are mine.",
        user_id = 3, category = 'Horrible'
    )
    post5 = Post (
        title='I Miss You',
        body="I always missed you when you weren't by my side. I thought I'd act strong and pretend I didn't, but I lied. I always missed you when you were gone and then I cried. I never got to tell you because of my pride. I always missed you when you were away so I'd hide. And now I can't even tell you anymore because your love for me, had died.I still see you with eyes wide. It hurts. I miss you.I miss you so much. Still I'll always remember your touch…", user_id = 4, category = 'Beautiful'
    )
    post6 = Post(
        title="I'm Always Here For You",
        body="It felt forever being sad and upset. What I didn't notice that the love I believed in, did exist. I was a fool for thinking it didn't, like how did I miss? It felt forever being mad and angry. What I had forgotten you've done for me because I was selfish and blinded. How could I not see, of all of the things you did for me and be so close minded.It felt forever since I was happy and joyful. Now I realize you did make my world and still do. I promise it's not out of the blue. I'm serious. My love for you only grew. No matter what I'm always here for you.", user_id = 4, category = 'Beautiful'
    )

    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)
    db.session.add(post4)
    db.session.add(post5)
    db.session.add(post6)
    db.session.commit()

def undo_posts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM posts"))
        
    db.session.commit()