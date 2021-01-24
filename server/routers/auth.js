const express = require('express');
const router = express.Router();
const passport = require('passport');

const Auth = require('../models/Auth')

router.post('/login', (req, res, next) => {
    console.log(req.body)
    passport.authenticate("local", {
        successRedirect: '/',
        failureRedirect: '/Howry/about'
    })
    res.send('Login')
    next()
})

router.post('/register', (req, res, next) => {
    Auth.findOne({username: req.body.username}, (err, doc) => {
        if(err) throw err
        if(doc) {
            res.json('Username is taken')
        } else {
            Auth.create(req.body)
                .then(() => console.log('Created'))
                res.send('Register')
        }
    })
})

router.get('/', (req, res, next) => {
    console.log('Login')
})

router.get('/logout', (req, res, next) => {
    res.logout()
    res.redirect('/Howry')
})

module.exports = router