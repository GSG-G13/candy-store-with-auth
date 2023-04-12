const Joi = require("joi");
const categoryFormSchema = Joi.object({
  name: Joi.string().alphanum().required(),
  img_url: Joi.string().min(6).max(150).required(),
});
module.exports = categoryFormSchema;
