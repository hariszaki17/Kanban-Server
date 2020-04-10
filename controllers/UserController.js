const { User } = require('../models')
const { generateToken } =  require('../helpers/jwt')
const { decrypt } = require('../helpers/bcrypt')
const { OAuth2Client } = require('google-auth-library');

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

    static googleSign(req, res, next) {
        const client = new OAuth2Client(process.env.CLIENT_ID);
        let email = ''
        client.verifyIdToken({
            idToken: req.body.token,
            audience: process.env.CLIENT_ID
        })
        .then((ticket) => {
            email = ticket.getPayload().email
            return User.findOne({
                where: {
                    email
                }
            })
        })
        .then(data => {
            if(data) {
                let payload = {
                    id: data.id,
                    email: data.email
                }
                let token = generateToken(payload)
                res.status(200).json({
                    id: data.id,
                    email: data.email,
                    token
                })
            } else {
                return User.create({
                 email,
                 password: 'googlePass123'   
                })
            }
        })
        .then((result) => {
            if (result) {
                const user = {
                    id: result.id,
                    email: result.email
                }
                const token = generateToken(user)
                res.status(201).json({
                    id: user.id,
                    email: user.email,
                    token
                })
            }
        })
        .catch((err) => {
            next(err)
        });
      }
}

module.exports = UserController