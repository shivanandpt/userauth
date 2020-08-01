const conf = require('./server/conf/conf');
const initializeDatabases = require('./server/conf/db')
(process.env.DB_TYPE, conf.get("dbs"));
const express = require('express')
const app = express();

require('./server/conf/express')(app,conf);

initializeDatabases.then(dbs => {
    console.log(process.env.DB_TYPE + " Connected !!!", dbs.user);
    
    require('./server/conf/routes')(app, dbs);

    app.listen(conf.get("port"),() => console.log('Listening on port ' +
    conf.get("port")));
})
.catch(err => {
    console.error('Failed to make all database connections!')
    console.error(err)
    process.exit(1)
});