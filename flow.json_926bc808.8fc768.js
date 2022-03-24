var require = context.global.get('require');
var payload = msg.req.body;
msg.ticektId = msg.payload.insertId;
msg.topic = "select deviceid from User where id=" + payload.assignto;
return msg;