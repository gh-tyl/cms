let http = require('http');
let url = require('url');
let fs = require('fs');

// let actors = ["Tom Cruise", "Brad Pitt", "Angelina Jolie", "Leonardo DiCaprio", "Jennifer Lawrence"];
// let body = '<h1>Actors</h1><ul>';

// actors.forEach(function (actor) {
// 	body += '<li>' + actor + '</li>';
// });

// body += '</ul>';

http.createServer(function (req, res) {
	let parsedUrl = url.parse(req.url, true);
	console.log(parsedUrl);
	console.log(parsedUrl.pathname);
	fs.readFile(`./${parsedUrl.pathname}.html`, function (err, data) {
		if (err) {
			res.writeHead(404, { 'Content-Type': 'text/html' });
			return res.end("404 Not Found");
		} else {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			return res.end();
		}
	});
}).listen(8080);
