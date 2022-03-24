var require = context.global.get('require');
var payload = msg.req.body;
var date = new Date().toISOString().split("T");
var dateTime = date[0] + " " +date[1].replaceAll('Z', '');
msg.topic = "UPDATE Ticket SET status='" + payload.status + "'," + "resolvedtime='" + dateTime + "' WHERE id=" + msg.req.params.id + ";";
return msg;