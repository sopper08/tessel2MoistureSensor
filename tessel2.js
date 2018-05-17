const tessel = require('tessel');
const http = require('http');
const axios = require('axios');
var pin = tessel.port.B.pin[4];

setInterval(() => {
    pin.analogRead((error,value)=>{
            if(error) throw error;

 			var year = new Date().getFullYear();
            var month = new Date().getMonth()+1;
            var day = new Date().getDate();
            var hour = new Date().getHours()+8;
            var minute = new Date().getMinutes();	
            var second = new Date().getSeconds();
            var time = year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;
			console.log(time+" "+value);
            
            if (value > 0.5) tessel.led[2].toggle();
         
            var urlreq =  'http://192.168.2.101:3000/test?time='+time+"&soilHumidity="+value;
            axios.get(urlreq);
                
        })
}, 1000);


