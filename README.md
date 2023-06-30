# MLS (My Love Story)

MLS is a soft clone of fmylife.com. MLS provides a platform to be able to share their love stories or any kind of format they choose, whether it may be a happy or sad one. It allows users to freely express what they imagine or their past experiences to connect or relate with others.

[MLS](https://mlscapstone.onrender.com/)

# Index
[MVP Feature List](https://github.com/Baluyotkevin/MLSCapstone/wiki/MVP-List) | 
[User Stories](https://github.com/Baluyotkevin/MLSCapstone/wiki/User-Stories) | 
[Wire Frames](https://github.com/Baluyotkevin/MLSCapstone/wiki/Wireframes) | 
[Database Scheme](https://github.com/Baluyotkevin/MLSCapstone/wiki/Database-Schema-and-Backend-Routes)


## Technologies Used

<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /><img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" /><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /><img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" /><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /><img src="https://img.shields.io/badge/Python-F7DF1E?style=for-the-badge&logo=python&logoColor=blue" /><img src="https://img.shields.io/badge/Render-white?style=for-the-badge&logo=render&logoColor=blue" />


## Getting started
1. Clone this repository:

   `
   https://github.com/Baluyotkevin/MLSCapstone.git
   `
2. Install denpendencies into the Backend:
* `pipenv install -r requirements.txt`

4. Install dependencies into the frontend:
* `npm install`

5. Create a **.env** file using the **.envexample** provided 

4. Set up your database with information from your .env and then run the following to create your database, migrate, and seed: 
 
 * `pipenv shell`
 * `flask db upgrade`
 * `flask seed all`

5. Start app backend using:
 * `flask run`

6. Start the app frontend using:
 * `npm start`

6. Now you can use the Demo User or Create an account

***

# Features 

## Stories
* Users can create a Story
* Users can read/view other Stories
* Users can update their Story
* Users can delete their Story

## Comments
* Users can create comments on a Story
* Users can read/view all of the comments on a Story
* Users can delete their comments in their comments profile

## AWS
Logged-in Users can 
* Change their profile picture
