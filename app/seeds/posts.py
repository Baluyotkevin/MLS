from app.models import db, Post, environment, SCHEMA
from sqlalchemy.sql import text
from .users import User

def seed_posts():
    users = User.query.all()
    post1 = Post(
        title='love', body="Rubidium, August, and September— And when you cried out, O, Prometheans, didn't they bring fire? These hands, if not gods, then why when you have come to me, and I have returned you to that from which you came—bright mud, mineral-salt—why then do you whisper O, my Hecatonchire. My Centimani. My hundred-handed one?", user_id = 1, category = 'Beautiful', post_loves=[users[1], users[2]], post_favorites=[users[2],users[3]]
    )
    post2 = Post(
        title='ConLove', body="Haven't they riveted your wrists, haven't they had you at your knees? And when these hands touched your throat, showed you how to take the apple and the rib, how to slip a thumb into your mouth and taste it all, didn't you sing out their ninety-nine names—", user_id = 1,category = 'Beautiful', post_loves=[users[2], users[3]]
    )
    post3 = Post(
        title='CornyLove', body = "It is hard not to have faith in this from the blue-brown clay of nigh these two potters crushed and smoothed you into being—grind, then curve—built your form up—atlas of bone, fields of muscle, one breast a fig tree, the other a nightingale, both Morning and Evening.",
        user_id = 2, category = 'Beautiful', post_loves=[users[1]]
    )
    post4 = Post (
        title='Ehh', body="And wasn't that good? Them at your hips— isn't this what God felt when he pressed together the first Beloved: Everything. Fever. Vapor. Atman. Pulsus. Finally, a sin worth hurting for. Finally, a sweet, a You are mine.",
        user_id = 3, category = 'Horrible', post_loves=[users[0], users[3]]
    )
    post5 = Post(title='First Meet', body="I first laid eyes on her in theater class and thought, 'Wow she's Gorgeous.' Later we were practicing we our partners and the first thing she said after was, 'Do you like have a number or anything?' I just chuckled and thought it was cute and said, '(Laughter), yeah of course I do.' We started getting to know one another and the next thing you know I fell in love with her. Not because of the times we spent together, but because she made me feel like I was the most important person in the world. Always being so sweet to me with her words coming out of her beautiful soft lips. I just couldn't help but fall in love with each of her features from top to bottom. The way she stared at me with those eyes had me mesmerized and enchanted. The way she spoke to me had me in trance until she stopped speaking. Her smile so beautifully breathtakingly had me forget how to breathe. The way she moved had me captivated until I had to look away. Her compassionate, kind, and tender heart. I just fell more in love each time I learned something new about her.", user_id = 4, category='Beautiful', post_loves=[users[0], users[1], users[2]]
    )
    post6 = Post (
        title='I Miss You', body="I always missed you when you weren't by my side. I thought I'd act strong and pretend I didn't, but I lied. I always missed you when you were gone and then I cried. I never got to tell you because of my pride. I always missed you when you were away so I'd hide. And now I can't even tell you anymore because your love for me, had died.I still see you with eyes wide. It hurts. I miss you.I miss you so much. Still I'll always remember your touch…", user_id = 4, category = 'Beautiful', post_loves=[users[0], users[1], users[2]]
    )
    post7 = Post(
        title="I'm Always Here For You", body="It felt forever being sad and upset. What I didn't notice that the love I believed in, did exist. I was a fool for thinking it didn't, like how did I miss? It felt forever being mad and angry. What I had forgotten you've done for me because I was selfish and blinded. How could I not see, of all of the things you did for me and be so close minded.It felt forever since I was happy and joyful. Now I realize you did make my world and still do. I promise it's not out of the blue. I'm serious. My love for you only grew. No matter what I'm always here for you.", user_id = 4, category = 'Beautiful', post_loves=[users[0], users[1], users[2]], post_favorites=[users[2],users[3]]
    )

    post9 = Post(
        title="I Love You", body="Words cannot express how much I love you. Not even the actions I do can follow through. The way you stare at me with those beautiful eyes. I can't help but be completely mesmerized. The sound of your voice that sounds so divine. How wonderful it would be, to call you mine. That captivating smile that takes my breathe away. Would make me speechless and not know what to say. My body and soul are yours to share. Your voice when you say my name brings me up from despair. The different kinds of laughter I hear when I'm being me. Makes me want to hurry and get down on one knee. Always missing you when you're not by my side. I get impatient to not make you my bride. Your kindness, your compassion, and your empathetic heart. Now thats what made me fall in love from the start. I love you with all my heart", user_id = 4, category='Beautiful', post_loves=[users[0], users[1], users[2], users[3], users[4]]
    )
    post10 = Post(
        title="Close To Heaven", body="You know your the only one for me, The thought of you, picks me up when I am lonely. I get all crazy when you call out my name, I'm close to heaven when your touching me. You say that you love me, Girl, I know it, I feel the same but still so afraid to show it, I get all crazy when you call out my name I'm close to heaven when your touching me It's gotta be love, sweet love (love sweet love) Whenever your near me Ooh you make me happy, baby Love, sweet love (love... sweet love) Whenever your near me Ooh you make me happy, baby, Me vuelvo loco pensando en Tu amor Cuandote veo, temblo por Tu calor Cerca del cielco, alma de Mi corazon, mis ladios Brillan llenos de emocion", user_id = 4, category='Beautiful'
    )
    post11 = Post(
        title='It hurts', body="It hurts not being able to see you anymore. It hurts not being able to feel your warmth. I never considered my love to be a chore.  I appreciated, enjoyed your whole being Just looking at you, I mean, it felt freeing It hurts not being able to get lost into those mesmerizing eyes. Like you with me? It came to me as a surprise. It hurts because I can't remind you how beautiful of a soul you are. But now all I can do now is appreciate and look at you from afar. It hurts because I loved seeing you look into my eyes and smile. It hurts because I still believe you're worth fighting for and all the while. I would have done anything to have kept you by my side. But I know people change and not everyone can stay in the tide.  It hurts because I still smell your scent. It hurts because I think of all the times we've spent. It hurts because I loved you so much. I guess this is part of the healing process. To feel everything and moving forward while being in a mess.", user_id = 4, category='Horrible'
    )
    post12 = Post(
        title='A Dance Of Souls', body="Two souls entwined in a dance so sweet, Moving in rhythm, their hearts complete. With every step, love's melody plays, Guiding their dance through life's myriad ways. Hand in hand, they twirl through life's maze, Love's choreography, a divine ballet. In this dance, their spirits intertwine, Forever partners, their love's design.", user_id = 3, category = 'Beautiful'
    )
    post13 = Post(
        title='Serenade Of Devotion', body="In the stillness of night, a serenade, Love's devotion, a symphony displayed. With every note, my heart sings for you, A melody of love, pure and true. The moonlit stage, our love's sanctuary, A serenade of souls, harmoniously. In this symphony, our hearts unite, Love's eternal song, a beacon of light.", user_id = 2, category = 'Beautiful'
    )
    post14 = Post(
        title='Whispers In The Wind', body="Whispers in the wind, secrets untold, Love's language, a story to unfold. Carried by breezes, caressing our skin, Love's gentle touch, a journey begins. In the rustling leaves, a love's embrace, Words unspoken, yet we both embrace. Whispers in the wind, love's sweet refrain, A symphony of hearts, forever sustained.", user_id = 1, category='Beautiful'
    )
    post15 = Post(
        title="Eternity's Embrace", body="In this timeless space, our love resides, A flame that burns, with infinite tides. Embraced by eternity's gentle hold, A love that's ageless, a tale untold. Through the eons, our souls entwine, Love's essence, immortal and divine. In this embrace, forever we'll be, Two souls, bound for all", user_id = 3, category = 'Beautiful'
    )
    post16 = Post(
        title="Love's Lament", body="Oh, love, you cruel and heartless beast, You turned my life into a dreadful feast. Like a vampire, you sucked me dry,Leaving me empty, asking why, oh why? Your words were like daggers, cutting deep, A love so toxic, it made me weep. Our relationship, a nightmare unending, A horror story, with no sign of mending.", user_id = 3, category='Horrible'
    )
    post17 = Post(
        title='A Diaster Of Love', body="Roses are red, violets are blue, But our love story is a catastrophe, it's true. Like a tornado, it tore us apart, Leaving a wreckage of a broken heart. Your kisses were like poison, oh so vile, And your touch sent shivers, but not with a smile. Our love was a trainwreck, doomed from the start, A perfect example of a shattered heart.", user_id = 2, category='Horrible'
    )
    post18 = Post(
        title="Love's Betrayal", body="In your arms, I thought I found solace, But it was an illusion, a love so callous. Your kisses were tainted, filled with deceit, A betrayal so deep, it left me incomplete. Our love was a sham, a charade of lies, A twisted game, with no compromise. I gave you my heart, but you played me fool, Love's treachery, the ultimate cruel.", user_id = 1, category='Horrible'
    )
    post19 = Post (
        title="Love's Nightmare", body="Roses are wilted, violets are dead, Our love story filled with constant dread. Your touch is icy, like a winter's gale, Our relationship, a ship destined to fail. Your laughter grates, like nails on a chalkboard, Our love's demise, inevitable and untoward. In your eyes, a void devoid of affection, Our love, a dark and twisted reflection.", user_id = 2, category='Horrible'
    )
    post20 = Post (
        title='Second Chance', body="I'm sorry for the all mistakes I've made to make you feel alone I realized I didn't have what it takes aid To muster up the courage to be completely vulnerable to you but I was afraid  I thought my feelings were silly so I lied As a result I gave you suffering and you probably felt betrayed. I know I've caused hurt and damage to your feelings. How could I not see that you were alone with all your dealings. You felt like you were by yourself and I didn't realize. You just wanted someone to listen, to understand and to be sympathized, with. To be that equal partner that you deserved. Speaking your love language consistently, I should have preserved Especially with my actions and filling up your love tank. What a fool I was, to take you for granted, let's be frank. Entirely depending on you to make me feel better even though I should've done that myself while fulfilling your love. I had forgotten how to love myself, so how could I even fill up your cup from above. I'm sorry that I was too blinded to see, That a relationship is between we. That how you felt was the most important to me. I know I can't change the past, I know it'd be too fast, I know I shouldn't ask But I know I'd make it last. What can I do to advance To prove to you that I would love a second chance.", user_id = 4, category='Horrible'
    )
    post21 = Post(
        title='You', body="Like morning dew on petals so tender, Your love's embrace, a sweet surrender. Each drop reflects a world anew, As I'm immersed in the love of you.", category='Beautiful', user_id = 2, post_loves=[users[0], users[3]]
    )
    post22 = Post(
        title='Embrace', body="Love is the sunrise after the night, Painting the world with golden light. With you by my side, every hue comes alive, In this love's embrace, forever we thrive.", cateogry='Beautiful', user_id = 3
    )
    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)
    db.session.add(post4)
    db.session.add(post5)
    db.session.add(post6)
    db.session.add(post7)
    db.session.add(post9)
    db.session.add(post10)
    db.session.add(post11)
    db.session.add(post12)
    db.session.add(post13)
    db.session.add(post14)
    db.session.add(post15)
    db.session.add(post16)
    db.session.add(post17)
    db.session.add(post18)
    db.session.add(post19)
    db.session.add(post20)
    db.session.add(post21)
    db.session.add(post22)
    db.session.commit()

def undo_posts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM posts"))
        
    db.session.commit()