let http = require('http');
let formidable = require('formidable');
let mv = require('mv');

http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
    let form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      let tmp = files.file.filepath;
      let newLocation = './uploads/';
      mv(tmp, newLocation + files.file.originalFilename, function (err) {
        if (err) {
          console.log(err);
          res.write('File uploaded but not moved!');
          res.end();
        } else {
          res.write('File uploaded and moved!');
          res.end();
        }
      });
    });
  }
}).listen(8080);
