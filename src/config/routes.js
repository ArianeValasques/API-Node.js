const admin = require('./admin')

module.exports = app => {
    app.post('/signup', app.src.controller.user.save)
    app.post('/signin', app.src.controller.auth.signin)
    app.post('/validateToken', app.src.controller.auth.validateToken)

    app.route('/users')
        .all(app.src.config.passport.authenticate())
        .post(admin(app.src.controller.user.save))
        .get(app.src.controller.user.get)

    app.route('/users/:id')
        .all(app.src.config.passport.authenticate())
        .put(admin(app.src.controller.user.save))
        .get(app.src.controller.user.getById)
        .delete(admin(app.src.controller.user.remove))

}