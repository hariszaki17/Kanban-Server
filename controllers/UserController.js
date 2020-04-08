const { User } = require('../models')
const { generateToken } =  require('../helpers/jwt')
const { decrypt } = require('../helpers/bcrypt')

class UserController {
    static read (req, res, next) {
        User.findAll()
        .then((result) => {
            return res.status(200).json({
                data: result
            })
        }).catch((err) => {
            return next(err)
        });
    }

    static register (req, res, next) {
        const user =  {
            email: req.body.email,
            password: req.body.password
        }
        User.create(user)
        .then((result) => {
            const payload = {
                id: result.id,
                email: result.email
            }
            const token = generateToken(payload)
            return res.status(201).json({
                id: result.id,
                email: result.email,
                token
            })
        }).catch((err) => {
            return next(err)
        });
    }

    static login (req, res, next) {
        User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then((result) => {
            if (result) {
                const compare = decrypt(req.body.password, result.password)
                if (compare) {
                    const payload = {
                        id: result.id,
                        email: result.email
                    }
                    const token = generateToken(payload)
                    return res.status(200).json({
                        id: result.id,
                        email: result.email,
                        token
                    })
                } else {
                    return next({
                        name: 'Unauthorized',
                        errors: [{ message: 'Invalid Email/Password' }]
                    })
                }
            } else {
                return next({
                    name: 'BadRequest',
                    errors: [{ message: 'Invalid Email/Password' }]
                })
            }
        }).catch((err) => {
            return next(err)
        });
    }
}

module.exports = UserController