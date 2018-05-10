const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const getweather = require('./weather/weather.js');

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

// console.log(argv);

geocode.geocodeAddress(argv.a , (errors, results) => {
    if(errors){
      console.log(errors);
    }
    else{
      console.log(JSON.stringify(results , undefined , 2 ));
      getweather.getweather(results.Latitude,results.Longitude,(errormessage, results) => {
            if(errormessage){
              console.log(errormessage);
            }else{
              console.log(JSON.stringify(results,undefined,2));
            }

      });

    }
//f971b8d0af211ed4825a0d06e3243874
});
