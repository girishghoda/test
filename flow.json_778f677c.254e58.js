var require = context.global.get('require');
if (msg.payload.length > 0) {
    delete msg.payload[0]["password"];
    msg.loginUser = msg.payload[0];
    if (msg.deviceToken) {
        msg.topic = "UPDATE User SET deviceid='" + msg.deviceToken + "'";
        msg.loginUser.deviceid = msg.deviceToken;
    }
} else {
    msg.loginUser = { 'code': '401', 'messge': 'User unauthorized' };
}
return msg;