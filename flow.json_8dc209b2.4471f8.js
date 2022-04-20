msg.payload = {id:"val-1", v: parseFloat(msg.topic).toFixed(1)+"C"};
context.global.dataPionts["val-1"].v=parseFloat(msg.topic).toFixed(1)+"C"; // used by ui init
return msg;