const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const session = require('express-session');
const FileStore = require('session-file-store')(session); 
var fileStoreOptions = {};
module.exports = function (app,conf) {

  app.use(session({
    genid: (req) => { //The function is given req as the first argument
      console.log("insid middleware \n session id " + req.sessionID);
      return uuidv4();
    },
    store: new FileStore(fileStoreOptions),
    secret: "test",
    resave: false,
    saveUninitialized: true,
    
  }));
  app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
  console.log('inside express');
};