var require = context.global.get('require');
msg.topic = "select at.name as 'createdBy', tm.id, tm.title, tm.info, tm.ticketid, tm.location, tm.updatedtime from TicketMetadata tm INNER join User at on at.id = tm.createdby where tm.ticketid=" + msg.req.params.id;
return msg;