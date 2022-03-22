var require = context.global.get('require');
msg.topic = "select at.name as 'assignedTo', t.id, t.title, t.details, t.customerlocation, t.customeraddress, t.status, t.assignto, t.createdby, t.createdtime, t.resolvedtime from Ticket t INNER join User at on at.id = t.assignto where createdby = " + msg.req.params.id + ";";
return msg;