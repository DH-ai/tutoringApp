# chat/consumers.py
import json
from channels.generic.websocket import AsyncWebsocketConsumer
from .models import Message
from datetime import datetime

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.session_id = self.scope['url_route']['kwargs']['session_id']
        self.room_group_name = f'chat_{self.session_id}'

        # Join the WebSocket group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        # Send previous messages to the WebSocket
        previous_messages = Message.objects.filter(session_id=self.session_id).order_by('timestamp')
        messages = [{"message_id": msg.id, "sender_id": msg.sender_id, "receiver_id": msg.receiver_id,
                     "message": msg.message, "timestamp": msg.timestamp.isoformat()} for msg in previous_messages]

        # Send previous messages to WebSocket
        await self.send(text_data=json.dumps({
            'previous_messages': messages
        }))

    async def disconnect(self, close_code):
        # Leave the room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    # Receive message from WebSocket
    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        sender_id = text_data_json['sender_id']
        receiver_id = text_data_json['receiver_id']

        # Store the new message in the database
        new_message = Message.objects.create(
            session_id=self.session_id,
            sender_id=sender_id,
            receiver_id=receiver_id,
            message=message,
            timestamp=datetime.now()
        )

        # Send the message to the room group
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message,
                'sender_id': sender_id,
                'receiver_id': receiver_id,
                'timestamp': new_message.timestamp.isoformat(),
                'message_id': new_message.id,
            }
        )

    # Receive message from room group
    async def chat_message(self, event):
        message = event['message']
        sender_id = event['sender_id']
        receiver_id = event['receiver_id']
        timestamp = event['timestamp']
        message_id = event['message_id']

        # Send the message to WebSocket
        await self.send(text_data=json.dumps({
            'message': message,
            'sender_id': sender_id,
            'receiver_id': receiver_id,
            'timestamp': timestamp,
            'message_id': message_id
        }))
