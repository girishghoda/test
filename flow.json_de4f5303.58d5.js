var require = context.global.get('require');
var payload = msg.req.body;
msg.topic = "select * from User";
return msg;