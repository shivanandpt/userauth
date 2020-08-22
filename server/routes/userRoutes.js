
var express = require('express');
var routes = function (User) {

    var userRouter = express.Router();

    userRouter.get('/user', function (req ,res, next) {
        User.find(function (err, users) {
            if (err) return console.error(err);
            console.log(users);
            return res.send(users.map(x=>x.getName()));
        })
    });

    userRouter.post('/user', function (req ,res, next) {
        let user = new User(req.body);
        user.setPassword(req.body.password);
        delete user.password;
        user.save(function (err, user) {
            if (err) return console.error(err);
            console.log(user);
            return res.send(user);
        })
    })

    return userRouter;
};

module.exports = routes;