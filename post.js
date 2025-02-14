// fetch("https://127.0.0.1:8080/transfer", {
// fetch("https://192.168.2.199:58524/transfer", {
//     method: "POST",
//     body: JSON.stringify({
//         user_to: "hi@gmail.com",
//         amount: 1000,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     //   "Cookie": document.cookie
//     }
//   });


// var express = require('express');
// var app = express();
// var cookieSession = require('cookie-session')
// var port = 3000

// app.use(function(req, res, next) {
//         res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8082");  
//         // res.header("Access-Control-Allow-Origin", "*");  
//         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Custom-Header, Access-Control-Allow-Origin, Access-Control-Allow-Credentials");
//         res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//         res.header("Access-Control-Allow-Credentials", "false");
//         res.header("Access-Control-Max-Age", "-1");
//         next();
//       });

// app.use(cookieSession({
//     name: 'session',
//     keys: ['akey'],
//     sameSite: 'none',
//     secure: true,
//     httpOnly: false,
// }))

// var cookie = new XMLHttpRequest();
//     cookie.open("GET", "http://127.0.0.1:8082/");
//     xhr.withCredentials = true;
//     xhr.send();    

var xhr = new XMLHttpRequest();
    // xhr.open("POST", "https://192.168.2.199:58524/transfer");
    xhr.open("POST", "https://127.0.0.1:8080/transfer");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.withCredentials = true;
    xhr.send("user_to=hi%40gmail.com&amount=1000");


// const express = require('express');
// const app = express();

// app.use((req, res, next) => {
// res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
// res.header("Access-Control-Allow-Methods", "POST"); // Allow POST method
// res.header("Access-Control-Allow-Headers", "Content-Type"); // Allow Content-Type header
// next();
// });

// app.post('/your-endpoint', (req, res) => {
// // Handle your POST request here
// res.send('POST request received');
// });