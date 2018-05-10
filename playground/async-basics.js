console.log('Starting app');

setTimeout(() => {
  console.log('inserting async thread');
},2000);

setTimeout(() => {
  console.log('inserting another comment');
},0000);

console.log('Finishing app');
