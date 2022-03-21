var require = context.global.get('require');
var payload = msg.req.body;
msg.topic = "SELECT * FROM User where username='" +  payload.username + "'AND password='" + payload.password + "';";
msg.deviceToken = payload.deviceToken;
return msg;