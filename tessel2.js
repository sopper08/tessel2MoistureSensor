const tessel = require('tessel');
const http = require('http');
const axios = require('axios');

// analogPin: 4
var pin = tessel.port.B.pin[4];

setInterval(() => {
    pin.analogRead((error,number)=>{
            if(error){
                throw error;
            }
            var urlreq =  'http://192.168.1.210:3000/test?username={0}'.format(number);
            axios.get(urlreq);
            // console.log(number);
        })
    }, 1000);

// 傳送GET request至該ip位址


