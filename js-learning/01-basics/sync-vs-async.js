// Synchronous Code(Blocking)

console.log('Step 1');
console.log('Step 2');
console.log('Step 3');

// Asynchronous Code (Non-blocking)
// Here o/p will be Start, End, Async Task - as Js does not wait for sync task unless you tell it to
console.log('Start');

setTimeout(() => {
    console.log('Async Task');
}, 1000);

console.log('End');


//Practise Questions
console.log('1');

Promise.resolve().then(() => {
  console.log('2');
});

setTimeout(() => {
  console.log('3');
}, 0);

Promise.resolve().then(() => {
  console.log('4');
});

console.log('5');
