const bodyParser = require('body-parser');
module.exports = function (app,conf) {
  app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
  console.log('inside express');
};