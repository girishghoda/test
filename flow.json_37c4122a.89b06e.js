if(context.global.dataPionts["tsw-1"].v==1){
	context.global.dataPionts["tsw-1"].v=0;
} else {
	context.global.dataPionts["tsw-1"].v=1;
}
msg.payload = {id:"tsw-1", v: context.global.dataPionts["tsw-1"].v}; 
return msg;