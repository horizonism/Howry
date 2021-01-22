// require
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const localstrat = require('passport-local').Strategy
const mongoose = require('mongoose')

const Auth = require('./models/Auth')
// initialize
const PORT = 4000
const app = express()
const dbURL = ' mongodb://127.0.0.1:27017/Howry'

mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(PORT, () => console.log(`Connected to MongoDB and Listen to PORT : ${PORT}`));
    })

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.use(session({secret:'cats', resave: true, saveUninitialized: false}))
passport.use(new localstrat((username, password, done) => {
    Auth.findOne({ username: username }, (err, user) => {
        if(err) {
            return done(err);
        }
        if(!user){
            return done(null, false, { msg: 'User not found'})
        }
        if(user.password !== password){
            return done(null, false, { msg: 'Password Incorrect'})
        }
        return done(null, user)
    })
}))
passport.serializeUser((user, done) =>{
    done(null, user.id)
})
passport.deserializeUser((id, done) =>{
    Auth.findById(id, (err, user) =>{
        done(err, user)
    })
})
app.use(passport.initialize())
app.use(passport.session())

// routes

app.post('/log-in', (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: '/',
        failureRedirect: '/log-in'
    })
    next()
})

app.post('/register', (req, res, next) => {
    Auth.create(req.body)
        .then(() => console.log('Created'))
    next()
})