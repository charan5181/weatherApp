const request = require('request');

var getweather = (Latitude,Longitude, callback) => {
request({
  url: `https://api.darksky.net/forecast/f971b8d0af211ed4825a0d06e3243874/${Latitude},${Longitude}`,
  json:true
}, (error,response,body) => {
     if(error){
       callback('wrong entry to get weather');
     }else{

      callback(undefined, {
        Temperature: body.currently.temperature,
        Humidity: body.currently.humidity
      })

   }

});
};

module.exports.getweather = getweather;
