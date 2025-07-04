import Joi from 'joi';

export const signupValidation = (obj) => {
  const schema = Joi.object({
    firstName: Joi.string().required().trim().min(3).max(30).messages({
      'string.empty': 'First name is required',
      'string.min': 'First name must be at least 3 characters long.',
      'string.max': 'First name must be at most 30 characters long.',
    }),
    lastName: Joi.string().required().trim().messages({
      'string.empty': 'Last name is required',
      'string.min': 'Last name must be at least 3 characters long.',
      'string.max': 'Last name must be at most 30 characters long.',
    }),
    username: Joi.string()
      .trim()
      .pattern(/^[a-zA-Z0-9_]+$/)
      .min(3)
      .max(30)
      .required()
      .messages({
        'string.pattern.base':
          'Username must contain only letters, numbers, and underscores',
        'string.min': 'Username must be at least 3 characters long',
        'string.max': 'Username cannot be longer than 30 characters',
        'any.required': 'Username is required',
      }),
    email: Joi.string().email().required().trim().messages({
      'string.empty': 'Email is required.',
      'string.email': 'Please enter a valid email address.',
    }),
    password: Joi.string().required().trim().min(8).max(32).messages({
      'string.empty': 'Password is required.',
      'string.min': 'Password must be at least 8 characters long.',
      'string.max': 'Password must be at most 32 characters long.',
    }),
  });

  return schema.validate(obj);
};

export const verifyEmailValidation = (obj) => {
  const schema = Joi.object({
    email: Joi.string().email().required().trim().messages({
      'string.empty': 'Email is required.',
      'string.email': 'Please enter a valid email address.',
    }),
    otp: Joi.string().required().trim().messages({
      'string.empty': 'OTP is required.',
    }),
  });

  return schema.validate(obj);
};

export const signinValidation = (obj) => {
  const schema = Joi.object({
    email: Joi.string().email().required().trim().messages({
      'string.empty': 'Email is required.',
      'string.email': 'Please enter a valid email address.',
    }),
    password: Joi.string().required().trim().min(8).max(32).messages({
      'string.empty': 'Password is required.',
      'string.min': 'Password must be at least 8 characters long.',
      'string.max': 'Password must be at most 32 characters long.',
    }),
  });

  return schema.validate(obj);
};

export const forgotPasswordValidation = (obj) => {
  const schema = Joi.object({
    email: Joi.string().email().required().trim().messages({
      'string.empty': 'Email is required.',
      'string.email': 'Please enter a valid email address.',
    }),
  });

  return schema.validate(obj);
};

export const resetPasswordValidation = (obj) => {
  const schema = Joi.object({
    email: Joi.string().email().required().trim().messages({
      'string.empty': 'Email is required.',
      'string.email': 'Please enter a valid email address.',
    }),
    newPassword: Joi.string().required().trim().min(8).max(32).messages({
      'string.empty': 'Password is required.',
      'string.min': 'Password must be at least 8 characters long.',
      'string.max': 'Password must be at most 32 characters long.',
    }),
    otp: Joi.string().required().trim().messages({
      'string.empty': 'OTP is required.',
    }),
  });

  return schema.validate(obj);
};
