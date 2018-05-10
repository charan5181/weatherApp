const yargs = require('yargs');
const axios = require('axios');

const argv =  yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;


var addrs = encodeURIComponent(argv.a);

var geocodeurl =  `http://maps.googleapis.com/maps/api/geocode/json?address=${addrs}`;

axios.get(geocodeurl).then((response) =>{
  console.log(response.data);
}).catch((e) => {
  console.log(e);
});
