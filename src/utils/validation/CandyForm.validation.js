const Joi = require("joi");
const CandyFormSchema = Joi.object({
  name: Joi.string().alphanum().required(),
  img_url: Joi.string().min(6).max(150).required(),
  quantity: Joi.string().pattern(new RegExp("^[0-9]{1,6}$")).required(),
  price: Joi.string().pattern(new RegExp("^[0-9]{1,3}$")).required(),
  category_id: Joi.number().integer().required(),
  flavor_id: Joi.number().integer().required(),
});
module.exports = CandyFormSchema;
