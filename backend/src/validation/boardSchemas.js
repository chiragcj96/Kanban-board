const Joi = require("joi");

const createBoardSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().allow("", null),
});

module.exports = { createBoardSchema };
