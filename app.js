const circle = require('./circle');
const myCircle = circle(4);
const myModule = require('./module');

// module/calc.js의 기능
const result = myModule.calc.add(1, 2);

console.log(result);

// module/print.js의 기능
myModule.print.sayHello();
// const add = require('./foo');
// const result = add(3,4);

// const calc = require('./foo');
// const add_result = calc.add(1,2);
// console.log(add_result);

// const minus_result = calc.minus(32,3);
// console.log(minus_result);

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/plain');
//     res.end('Hello World');
// });

// server.listen(port,hostname,()=> {
//     console.log(`Server running at http://${hostname}:${port}`);
// });


// console.log(`지름이 4인 원의 면적: ${myCircle.area(4)}`);
// console.log(`지름이 4인 원의 둘레: ${myCircle.circumference(4)}`);
// console.log(result);