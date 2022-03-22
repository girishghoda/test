var require = context.global.get('require');
var payload = msg.req.body;
msg.topic = "INSERT INTO User (name, username, email, password, deviceid, role) VALUES ('" + payload.name + "','"  + payload.username + "','" + payload.email + "','" + payload.password + "','" + payload.deviceid + "','" + payload.role + "');";
return msg;