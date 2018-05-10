const request = require('request');

var geocodeAddress = (address) =>{

 var addrs  = encodeURIComponent(address);

 return new Promise((resolve,reject) => {

  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${addrs}`,
    json: true

  },(error,response,body) => {
    if(error){
      reject('Invalid URL');
    }else{
      resolve({
        Address: body.results[0].formatted_address,
        Latitude: body.results[0].geometry.location.lat,
        Longitude: body.results[0].geometry.location.lng
      });
    }
  });



 });


};

geocodeAddress('560037').then((location) => {
  console.log(JSON.stringify(location,undefined,2));
}, (errormessage) => {
  console.log(errormessage);
});
