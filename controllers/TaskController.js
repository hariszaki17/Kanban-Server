const { Task } = require('../models')
const { Op } = require('sequelize')

class TaskController {
    static read (req, res, next) {
        Task.findAll({
            where: {
                userId: req.currentuserId
            }
        })
        .then((result) => {
            return res.status(200).json({
                tasks: result
            })
        }).catch((err) => {
            return next(err)
        });
    }

    static create (req, res, next) {
        const task = {
            title: req.body.title,
            category: req.body.category,
            userId: req.currentuserId
        }
        Task.create(task)
        .then((result) => {
            res.status(201).json({
                task: {
                    id: result.id,
                    title: result.title,
                    category: result.category,
                    userId: result.userId
                }
            })
        }).catch((err) => {
            return next(err)
        });
    }

    static delete (req, res, next) {
        Task.destroy({
            where: {
                id: req.params.id
            }
        })
        .then((result) => {
            return res.status(200).json({
                message: 'Task successfully deleted'
            })
        }).catch((err) => {
            return next(err)
        });
    }

    static edit (req, res, next) {
        let type = ''
        let args = ''
        if (req.query.type) {
            if (req.query.type.trim() == 'title') {
                type = 'title'
                args = req.body.title
            } else if (req.query.type.trim() == 'category') {
                type = 'category'
                args = req.body.category
            } else {
                return next({
                    name: 'BadRequest',
                    errors: [{ message: 'Invalid request' }]
                })
            }
        } else {
            return next({
                name: 'BadRequest',
                errors: [{ message: 'Invalid request' }]
            })
        }
        Task.update(
            { 
                [type]: args 
            },
            { 
                where: {
                    id: req.params.id
                }
            }
        )
        .then((result) => {
            return res.status(200).json({
                message: 'Data successfully updated'
            })
        }).catch((err) => {
            return next(err)
        });
    }
}

module.exports = TaskController