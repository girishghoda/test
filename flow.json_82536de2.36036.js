var require = context.global.get('require');
var payload = msg.payload;
var date = new Date().toISOString().split("T");
var dateTime = date[0] + " " +date[1].replaceAll('Z', '');
node.warn(payload);
msg.topic = "INSERT INTO TicketMetadata (ticketid, title, createdby, location, updatedtime, info) VALUES (" + payload.ticketid + ",'" + payload.title + "'," + payload.createdby + ",'" + payload.location + "','" + dateTime + "'," + JSON.stringify(payload.info) +");";
return msg;