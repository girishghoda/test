var require = context.global.get('require'); 
const fs = require('fs');
let csvData = fs.readFileSync(msg.predictions_file_name, "utf8");
csvData = csvData.toString();
let html = '<table class="table"><thead><tr>'
let data = [];
let lines = csvData.split(/(?:\r\n|\n)+/).filter(function (el,i) {
    let arr = el.split(",");
    data.push(arr)
    if(i==0){
        arr.filter(ele=>{
           html+='<th scope="col">'+ele+'</th>';
        })
        html+='</tr>'
    }else{
        html+='<tr>'
        arr.filter(ele=>{
           html+='<td>'+ele+'</td>';
        })
        html+='</tr>';
    }
    return el.length != 0;
});
msg.modelVisualizeTemplate = html;
return msg;