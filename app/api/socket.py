from flask_socketio import SocketIO, emit, send
from flask import request
import os
from flask_socketio import join_room, leave_room

# configure cors_allowed_origins
if os.environ.get("FLASK_ENV") == "production":
    origins = [
        "https://mlscapstone.onrender.com/"
    ]
else:
    origins = "*"

# initialize your socket instance
socketio = SocketIO(cors_allowed_origins=origins)


# @socketio.on("event-type")
# def function_to_handle_event(data_included_with_event):
#     # code to follow

users = {}

@socketio.on('connect')
def test_connect(auth):
    emit('my response', {'data': 'Connected'})

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')


@socketio.on('join')
def on_join(data):
    username = data['username']
    print(username)
    room = data['room']
    print(room)
    join_room(room)
    send(username + ' has entered the room.', to=room)

# @socketio.on('leave')
# def on_leave(data):
#     username = data['username']
#     room = data['room']
#     leave_room(room)
#     send(username + ' has left the room.', to=request.sid)



@socketio.on('message')
def handle_message(message):
    print('hello')
    send(message)

@socketio.on("chat")
def handle_chat(data):
    emit("chat", data, broadcast=True)


# @socketio.on('my event')
# def handle_my_custom_event(json):
#     print('received json: ' + str(json))
