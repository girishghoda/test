/* 	UI dispatcher v0.1b 08/10/2014
	Recives changes from UI and actions them 
	Now uses context.global.dataPionts to hold state */
var obj = JSON.parse(msg.payload);
delete msg.payload;
delete msg._session;

// toggle switch tsw-1	- output 1 
if(obj.id=="tsw-1"){
	context.global.dataPionts["tsw-1"].v=obj.v;
	msg.payload = {"id": obj.id, "v": obj.v};	
	return [msg, null, null, null, null];

// toggle switch tsw-2	- output 2 
} else if(obj.id=="tsw-2"){
    context.global.dataPionts["tsw-2"].v=obj.v;
	msg.payload = {"id": obj.id, "v": obj.v};	
	return [null, msg, null, null, null];
	
// slider  sld-1 		- output 3 	
} else if(obj.id=="sld-1"){
	context.global.dataPionts["sld-1"].v=obj.v;
	msg.payload = {"id": obj.id, "v": obj.v};	
	return [null, null, msg, null, null, null];

// txt popup txt-1 		- output 4 	
} else if(obj.id=="txt-1"){
	context.global.dataPionts["txt-1"].v=obj.v;
	msg.payload = {"id": obj.id, "v": obj.v};	
	return [null, null, null, msg, null, null];

// init request 		- output 5 
} else if(obj.id=="init"){	
	context.global.dataPionts["shd"].v = JSON.stringify(context.global.schedule);
	msg.payload = {id:"init", v: context.global.dataPionts}; 
	return [null, null, null, null, msg, null];
	
// save shedule 		- output 6 
} else if(obj.id=="shd-save"){
	context.global.schedule = null;
	//context.global.schedule = JSON.stringify(obj.v);
	context.global.schedule = obj.v;
	msg.payload = obj.v;
	return [null, null, null, null, null, msg];

//  do nothing
} else {
	return [null, null, null, null, null, null];
}