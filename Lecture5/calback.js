function callback(){
    console.log('Timeout completed');
}
console.log('stary')
setTimeout(callback,3000);
console.log('End')