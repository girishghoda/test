var require = context.global.get('require');
var payload = msg.req.body;
var date = new Date().toISOString().split("T");
var dateTime = date[0] + " " +date[1].replaceAll('Z', '');
msg.topic = "INSERT INTO Ticket (title, details, customerlocation, customeraddress, status, assignto, createdby, createdtime, resolvedtime) VALUES ('" + payload.title + "','"  + payload.detail + "','"  + payload.customerlocation + "','" + payload.customeraddress + "','" + payload.status + "'," + payload.assignto + "," + payload.createdby +  ",'" + dateTime +  "','" + dateTime + "');";
return msg;