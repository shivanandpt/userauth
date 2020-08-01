module.exports = function (app, dbs) {

    //Models are created
    var User = require('../models/userModel')(dbs.core);


    //Routes for model are created
    var userRoutes = require('../routes/userRoutes')(User);


    //Routes are assigned to app and created
    app.use('/test', userRoutes);
  

  /*   // Get all paths starting with partials and replace them with /public/app + given folder and file
    app.get('/partials/*', function (req, res) {
        console.log(req.params);
        res.render('../../public/app/' + req.params[0]);
    });

    // all path other than defined paths are redirected to landing page
    app.get('*', function (req, res) {
        res.render('index');
    });

    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    app.use(function (err, req, res, next) {
        if (err.name === 'UnauthorizedError') {
            res.status(401);
            res.json({ "message": err.name + ": " + err.message });
        }
    });

    if (app.get('env') === 'development') {
        app.use(function (err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
 */
}