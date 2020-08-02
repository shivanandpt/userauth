const bodyParser = require('body-parser');
const session = require('express-session');
const util = require('./util');
module.exports = function (app, conf, dbs) {

  app.use(session(util.setSessionConfig(conf, session, dbs)));
  app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
  console.log('inside express');
};