from app.models import db, Post, environment, SCHEMA
from sqlalchemy.sql import text

def seed_posts():
    post1 = Post(
        title='love', body="Rubidium, August, and September— And when you cried out, O, Prometheans, didn't they bring fire? These hands, if not gods, then why when you have come to me, and I have returned you to that from which you came—bright mud, mineral-salt—why then do you whisper O, my Hecatonchire. My Centimani. My hundred-handed one?", user_id = 1, category = 'Beautiful'
    )
    post2 = Post(
        title='ConLove', body="Haven't they riveted your wrists, haven't they had you at your knees? And when these hands touched your throat, showed you how to take the apple and the rib, how to slip a thumb into your mouth and taste it all, didn't you sing out their ninety-nine names—", user_id = 1,category = 'Beautiful'
    )
    post3 = Post(
        title='CornyLove', body = "It is hard not to have faith in this from the blue-brown clay of nigh these two potters crushed and smoothed you into being—grind, then curve—built your form up—atlas of bone, fields of muscle, one breast a fig tree, the other a nightingale, both Morning and Evening.",
        user_id = 2, category = 'Beautiful'
    )

    post4 = Post (
        title='Ehh', body="And wasn't that good? Them at your hips— isn't this what God felt when he pressed together the first Beloved: Everything. Fever. Vapor. Atman. Pulsus. Finally, a sin worth hurting for. Finally, a sweet, a You are mine.",
        user_id = 3, category = 'Horrible'
    )
    post5 = Post (
        title='I Miss You', body="I always missed you when you weren't by my side. I thought I'd act strong and pretend I didn't, but I lied. I always missed you when you were gone and then I cried. I never got to tell you because of my pride. I always missed you when you were away so I'd hide. And now I can't even tell you anymore because your love for me, had died.I still see you with eyes wide. It hurts. I miss you.I miss you so much. Still I'll always remember your touch…", user_id = 4, category = 'Beautiful'
    )
    post6 = Post(
        title="I'm Always Here For You", body="It felt forever being sad and upset. What I didn't notice that the love I believed in, did exist. I was a fool for thinking it didn't, like how did I miss? It felt forever being mad and angry. What I had forgotten you've done for me because I was selfish and blinded. How could I not see, of all of the things you did for me and be so close minded.It felt forever since I was happy and joyful. Now I realize you did make my world and still do. I promise it's not out of the blue. I'm serious. My love for you only grew. No matter what I'm always here for you.", user_id = 4, category = 'Beautiful'
    )
    post7 = Post(
        title='First Meet', body="I first laid eyes on her in theater class and thought, 'Wow she's Gorgeous.' Later we were practicing we our partners and the first thing she said after was, 'Do you like have a number or anything?' I just chuckled and thought it was cute and said, '(Laughter), yeah of course I do.' We started getting to know one another and the next thing you know I fell in love with her. Not because of the times we spent together, but because she made me feel like I was the most important person in the world. Always being so sweet to me with her words coming out of her beautiful soft lips. I just couldn't help but fall in love with each of her features from top to bottom. The way she stared at me with those eyes had me mesmerized and enchanted. The way she spoke to me had me in trance until she stopped speaking. Her smile so beautifully breathtakingly had me forget how to breathe. The way she moved had me captivated until I had to look away. Her compassionate, kind, and tender heart. I just fell more in love each time I learned something new about her.", user_id = 4, category='Beautiful', 
    )
    post8 = Post(
        title="I Love You", body="Words cannot express how much I love you. Not even the actions I do can follow through. The way you stare at me with those beautiful eyes. I can't help but be completely mesmerized. The sound of your voice that sounds so divine. How wonderful it would be, to call you mine. That captivating smile that takes my breathe away. Would make me speechless and not know what to say. My body and soul are yours to share. Your voice when you say my name brings me up from despair. The different kinds of laughter I hear when I'm being me. Makes me want to hurry and get down on one knee. Always missing you when you're not by my side. I get impatient to not make you my bride. Your kindness, your compassion, and your empathetic heart. Now thats what made me fall in love from the start. I love you with all my heart", user_id = 4, category='Beautiful'
    )
    post9 = Post(
        title="Close To Heaven", body="You know your the only one for me, The thought of you, picks me up when I am lonely. I get all crazy when you call out my name, I'm close to heaven when your touching me. You say that you love me, Girl, I know it, I feel the same but still so afraid to show it, I get all crazy when you call out my name I'm close to heaven when your touching me It's gotta be love, sweet love (love sweet love) Whenever your near me Ooh you make me happy, baby Love, sweet love (love... sweet love) Whenever your near me Ooh you make me happy, baby, Me vuelvo loco pensando en Tu amor Cuandote veo, temblo por Tu calor Cerca del cielco, alma de Mi corazon, mis ladios Brillan llenos de emocion", user_id = 4, category='Beautiful'
    )


    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)
    db.session.add(post4)
    db.session.add(post5)
    db.session.add(post6)
    db.session.add(post7)
    db.session.add(post8)
    db.session.add(post9)
    db.session.commit()

def undo_posts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM posts"))
        
    db.session.commit()