 // Web User created Scheduler v0.1b 
context.dayOfWeek = context.dayOfWeek || null; 
context.scheduledState = context.scheduledState || [];
//console.log("len:"+context.scheduledState.length); 
if(context.scheduledState.length==0){
	for(var i = 0; i < 21; i++) {
	   context.scheduledState[i]=null;
	}
}
var d = new Date();
var _tm = "d:"+d.getDay()+" h:"+d.getHours()+" m:"+ d.getMinutes()+" s:"+ d.getSeconds();
msg.payload = "Scheduled run";

function getEvents(){
	
	console.log("schedule run at:"+_tm);
	
	for (var item in context.global.schedule.items) {
		var itemI =  parseInt(item);
		var event = context.global.schedule.items[item];
		//console.log("id:"+event.id+" dow:"+event.dofWeek[d.getDay()]+" state:"+ context.scheduledState[itemI]+" type:"+ typeof  itemI);
		
		// Check for scheduled Start event		
		var hrmin=event.startTime.split(":");
		if(parseInt(hrmin[0]) ==d.getHours() &&  parseInt(hrmin[1]) ==d.getMinutes() &&  context.scheduledState[itemI]==null &&  event.dofWeek[d.getDay()] ==1){
			msg.payload = {id: event.id, v:event.startValue};
			context.scheduledState[itemI]=1;
			console.log("id:"+event.id+" start scheduled state:"+context.scheduledState[itemI]);
			return
		}
		// Check for scheduled End event
		hrmin=event.endTime.split(":");
		if(parseInt(hrmin[0]) ==d.getHours() &&  parseInt(hrmin[1]) ==d.getMinutes() &&  context.scheduledState[itemI]==1 &&  event.dofWeek[d.getDay()] ==1){
			msg.payload = {id: event.id, v:event.endValue};
			context.scheduledState[itemI]= null;
			return
		}
	}
}

function scheduleReset(){
	if(context.dayOfWeek != d.getDay()){
		
		if(context.dayOfWeek == null){
			console.log( "reset scheduel due to node-red restart");	
		} else {
			console.log( "reset scheduel due to change of day:"+d.getDay());		
		}
		
		context.dayOfWeek = d.getDay();
		for (var item in context.global.schedule.items) {
			var itemI =  parseInt(item);
			if(context.scheduledState[itemI]==1 && context.global.schedule.items[item].noEndTime==true ){
				context.scheduledState[itemI]=null;
				console.log("schedule item:"+itemI+" reset");
			}
		}
		msg.payload = "schedule reset";
	}
}

scheduleReset();
getEvents();
return msg;