"use strict";

const express = require('express');
// const http = require("http");
// const fs = require("fs");
// const path = require('path');
const app = express();
const scraperController = require('./scraper');

// > CORS
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// });


app.get('/',
  scraperController.getData, scraperController.allPostings,
  /* scraperController.getDetails */,
  (req, res) => {
    res.send(res.locals)
  }

);
// app.put('/', (req, res) => {
//   res.send('put works')
// });


app.listen(3000, () => {
  console.log(`Server started on port: 3000`)
});

// {
// const server = http
//   .createServer((request, response) => {
//     if (request.method === "GET") {
//       if (request.url === "/") {
//         console.log('hi')
//       }
//     }
//     if (request.method === "POST") {
//       console.log('hello')
//     }
//     response.statusCode = 404;
//     response.end("Cannot Find Resource");
//   })


// server.listen(3000);
//  }
// module.exports = server;

// !-------------------------------------------
// const server = http
//   .createServer((request, response) => {
//     if (request.method === "GET") {
//       if (request.url === "/") {
//       }
//       if (request.method === "POST") {
//       }
//       response.statusCode = 404;
//       response.end("Cannot Find Resource");
//     })
//   .listen(3000);

// {
// 'use strict';

// const express = require('express');
// const app = express();
// const scraperController = require('./scraper');

// // first sample route
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.get('/sample', scraperController.getData, (req, res) => {
//   res.set({
//     'content-type': 'application/json'
//   }).send(res.locals.free);
// });

// app.listen(3000, () => {
//   console.log('Server started on port: 3000')
// });

// module.exports = app;

//  }

// const http = require("http");
// const fs = require("fs");

// const server = http
//   .createServer((request, response) => {
//     if (request.method === "GET") {
//       if (request.url === "/") {
//       }
//       if (request.method === "POST") {
//       }
//       response.statusCode = 404;
//       response.end("Cannot Find Resource");
//     })
//   .listen(3000);

// module.exports = server;
