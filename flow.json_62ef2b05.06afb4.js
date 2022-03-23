context.count = context.count || parseInt(context.global.dataPionts["sld-1"].v); 
context.count = parseInt(context.count) + parseInt(msg.topic);
if(context.count>100){context.count=0;}
context.global.dataPionts["sld-1"].v=context.count; // used by ui init
msg.payload = {id:"sld-1", v: context.count}; 
return msg;