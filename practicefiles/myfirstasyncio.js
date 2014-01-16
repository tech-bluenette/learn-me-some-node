var fs = require('fs');

fs.readFile(process.argv[2]).toString().split("\n"), function(err, data)
if(err) throw err;
console.log(data.length -1);    


// fs.readFile('/etc/passwd', function (err, data) {
//   if (err) throw err;
//   console.log(data);
// }); 


// -------------------------------------------------------------------------------

// // # HINTS

// // The solution to this problem is almost the same as the previous problem except you must now do it the Node.js way:
//  asynchronous.

// // Instead of fs.readFileSync() you will want to use fs.readFile() and instead of using the return value of this method you need to 
// collect the value from a callback function that you pass in as the second argument.

// // Remember that idiomatic Node.js callbacks normally have the signature:

// //     function callback (err, data) { /* ... */ }

// // so you can check if an error occurred by checking whether the first argument is truthy. If there is no error, you should have 
// your Buffer object as the second argument. As with readFileSync(), you can supply 'utf8' as the second argument and put the 
// callback as the third argument and you will get a String instead of a Buffer.

