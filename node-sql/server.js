let http = require('http');

let mysql = require('mysql2');
let config = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: 'edu_db'
});

http.createServer(function (req, res) {
  // set cors headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  config.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
  if (req.url === '/auth/login') {
    // get data from request
    res.on('data', function (data) {
      console.log(data);
    });
    console.log("req.url");
    console.log(req.url);
    console.log("req.body");
    console.log(req.body);
    console.log("req.headers");
    console.log(req.headers);
    let email = req.headers.email;
    let password = req.headers.password;
    console.log(email, password);
    config.query("SELECT * FROM user_table WHERE email = '" + email + "' AND password = '" + password + "'", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      //
    });
  }
  res.end();
}).listen(8080);