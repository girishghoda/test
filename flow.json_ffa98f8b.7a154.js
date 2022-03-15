var require = context.global.get('require');
const deviceid = msg.payload[0].deviceid;
msg.payload = { "to": deviceid, "notification": { "title": "New ticket created", "body": ""}};
msg.headers = { "Authorization": "key=AAAAFqi3d1k:APA91bFu0OkDfdeSzgYYoG5suGQoj331gKnFtRAQniIGgHAEXyzitn3N8HIWGE8_FRSaV-bnF8Bj8Lrk9goM0RSLFfiFvYHro5x7VtbvL7z86cVQxinAT8IwRcmcl-x0Mhqj1sqgLyss"};
return msg;