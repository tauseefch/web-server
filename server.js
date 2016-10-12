var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('Prvate Route Hit');
		next();
	},
	logger: function(req, res, next) {
		date = new Date().toString();
		console.log('Request: ' + req.method + ' ' + req.originalUrl + ' ' + date);
		next();
	}
}
app.use(middleware.logger);
// app.use(middleware.requireAuthentication);

app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About Us');
});

app.use(express.static(__dirname +  '/public'));

app.listen(PORT, function() {
	console.log('Express Server Started and port is ' + PORT);
});