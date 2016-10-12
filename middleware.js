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

module.exports = middleware;