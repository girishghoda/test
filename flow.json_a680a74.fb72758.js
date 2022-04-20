
const fileName = msg.payload;
msg.payload = {"to": "/topics/interplayappdemochannel","data": {"message": "This is a FCM Topic Message!"},"notification":{"body" : fileName, "title": "File Have been Chnage","android": {"imageUrl": "https://orchv9.interplay.iterate.ai/admin/index.html/favicon.ico"}}};
msg.headers = {"Authorization": "key=AAAAFqi3d1k:APA91bFu0OkDfdeSzgYYoG5suGQoj331gKnFtRAQniIGgHAEXyzitn3N8HIWGE8_FRSaV-bnF8Bj8Lrk9goM0RSLFfiFvYHro5x7VtbvL7z86cVQxinAT8IwRcmcl-x0Mhqj1sqgLyss"};
return msg;
