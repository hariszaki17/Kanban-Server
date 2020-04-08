const { Task } = require('../models')

const authorization = (req, res, next) => {
    Task.findOne({
        where: {
            id: req.params.id
        }
    })
    .then((result) => {
        if (result) {
            if (result.userId == req.currentuserId) {
                return next()
            } else {
                return next({
                    name: 'Unauthorized',
                    errors: [{ message: 'Unauhtorized user detected' }]
                })
            }
        } else  {
            return next({
                name: 'NotFound',
                errors: [{ message: 'Task Not Found' }]
            })
        }
    }).catch((err) => {
        return next(err)
    });
}

module.exports = authorization