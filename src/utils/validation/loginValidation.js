const Joi = require('joi');
const loginSchema = Joi.object({
    userName: Joi.string()
      .required(),
    password: Joi.string().alphanum().min(6).required(),
  });
  module.exports = loginSchema;