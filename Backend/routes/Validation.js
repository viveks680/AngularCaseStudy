// VALIDATION
const Joi = require('@hapi/joi');

//Login Validation
const loginValidation = data => {
    const schema = {
        Username: Joi.string().min(6).required().email(),
        Password: Joi.string().min(6).required()
    }; 

    return Joi.validate(data, schema);
};

module.exports.loginValidation = loginValidation;

