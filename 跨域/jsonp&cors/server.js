const express = require('express');
let app = express();
const whitList = ['http://127.0.0.1:5500'];

app.use(function (req, res, next) {
  let origin = req.headers.origin;
  if (whitList.includes(origin)) {
    // 设置哪个源可以访问我
    res.setHeader('Access-Control-Allow-Origin', origin);
    // 允许携带哪个头访问我
    res.setHeader('Access-Control-Allow-Headers', 'name');
    // 允许哪个方法访问我
    res.setHeader('Access-Control-Allow-Methods', 'DELETE,PUT');
    // 允许携带cookie
    res.setHeader('Access-Control-Allow-Credentials', true);
    // 预检的存活时间
    res.setHeader('Access-Control-Max-Age', 6);
    // 允许返回的头
    res.setHeader('Access-Control-Expose-Headers', 'name');
    if (req.method === 'OPTIONS') {
      res.end(); // OPTIONS请求不做任何处理
    }
  }
  next();
});

app.get('/hello', (req, res) => {
  let { name, callback = 'console.log' } = req.query;
  console.log(name, callback);
  res.end(`${callback}('this is hello')`);
});

app.put('/hello', (req, res) => {
  let { name, callback = 'console.log' } = req.query;
  console.log(name, callback);
  res.end(`${callback}('this is hello')`);
});

app.get('/hello_ajax', (req, res) => {
  res.jsonp({
    msg: 'this is hello-ajax ',
  });
});

app.listen(3000);
