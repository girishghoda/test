if(context.global.dataPionts["tsw-2"].v==1){
	context.global.dataPionts["tsw-2"].v=0;
} else {
	context.global.dataPionts["tsw-2"].v=1;
}
msg.payload = {id:"tsw-2", v: context.global.dataPionts["tsw-2"].v}; 
return msg;