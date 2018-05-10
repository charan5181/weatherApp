var asyncadd = (a, b) => {

return new Promise((resolve,reject) => {
      setTimeout(() => {
           if(typeof a === 'number' && typeof b === 'number'){
             resolve(a + b);
           }else{
             reject('Arguments must be numbers');
           }

      }, 2000);

});

}

asyncadd(3, 4).then((Result) => {
  console.log(Result);
}, (error)=>{
  console.log(error);
});



// var somepromise = new Promise((resolve,reject) => {
//
//  setTimeout(() => {
//    resolve('Resolve worked');
//    reject('rejected');
//  }, 2000);
//
// });
//
// somepromise.then((message) => {
//   console.log('Success: 200 '+message);
// }, (errormessage) => {
//   console.log('Rejcted: 404 '+errormessage)
// })
