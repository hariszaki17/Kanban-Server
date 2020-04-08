const { Sequelize } = require('../models')

const errorHandler = (err, req, res, next) => {

    if (err.name == 'BadRequest') {
        return res.status(400).json({
            errors: err.errors
        })
    } else if (err.name == 'NotFound') {
        return res.status(404).json({
            errors: err.errors
        })
    } else if (err.name == 'Unauhtorized') {
        return res.status(401).json({
            errors: err.errors
        })
    } else if (err.name == 'InternalServerError') {
        return res.status(500).json({
            errors: err.errors
        })
    } else if (err instanceof Sequelize.ValidationError) {
        return res.status(500).json({
            errors: err
        })
    } else if (err instanceof Sequelize.DatabaseError) {
        return res.status(500).json({
            errors: err
        })
    } else if (err.name == 'JsonWebTokenError') {
        return res.status(500).json({
            errors: err
        })
    } else {
        return res.status(500).json({
            errors: err
        })
    }

}

module.exports = errorHandler