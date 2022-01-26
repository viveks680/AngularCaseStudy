const express = require("express");
const router = express.Router();
require('dotenv').config({});
const User = require('../models/user');
const loginValidation = require('./Validation');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');


router.post('/login', async (req, res) => {
 // LETS VALIDATE THE DATA BEFORE WE LOGIN
 const {error} = loginValidation(req.body);
 if(error) return res.status(400).send(error.details[0].message);

 // CHECKING IF USERLOGIN IS IN THE DATABASE
 const user = await User.findOne({ email: req.body.email });
 if (!user) return res.status(400).send('Username is not found');

 //HASH PASSWORDS
 const salt = await bcrypt.genSalt(10);
 const hashedPassword = await bcrypt.hash(req.body.Password, salt);

 //PASSWORD IS CORRECT
 const validPass = await bcrypt.compare(req.body.Password, user.Password);
 if(!validPass) return res.status(400).send('Invalid Password');

 // CREATE AND ASSIGN A TOKEN
 const token = jwt.sign({_id: user._id}, process.env.ACCESS_TOKEN_SECRET);
 res.header('auth-token', token).send(token);

});

module.exports = router;

