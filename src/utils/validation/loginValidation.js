const Joi = require('joi');
const loginSchema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 3, tlds: { allow: ["com", "net", "org"] } })
      .required(),
    password: Joi.string().alphanum().min(6).required(),
  });
  module.exports = loginSchema;