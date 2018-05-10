const request = require('request');

var geocodeAddress = (address, callback) => {

  var addr = encodeURIComponent(address);

  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${addr}`,
    json: true
  }, (error,response,body) =>{
    if(error){
      callback('Unable to connect to google servers...');
    }
    else if(body.status === 'ZERO_RESULTS'){
      callback('Invalid address');
    }
    else  {
    callback(undefined, {
      Address: body.results[0].formatted_address,
      Latitude: body.results[0].geometry.location.lat,
      Longitude: body.results[0].geometry.location.lng
    });

  }

});

};

module.exports.geocodeAddress = geocodeAddress;
