import Joi from "joi";

export const userValidator = Joi.object({
    username: Joi.string().min(3).required().messages({
        'string.empty': 'Username cannot be empty',
        'string.min': 'Username must be more than 3 characters',
        'any.required': 'Username is required',
    }),
    password: Joi.string().min(8).required().messages({
        'string.empty': 'Password cannot be empty',
        'string.min': 'Password must be more than 8 characters',
        'any.required': 'Password is required',
    }),
});