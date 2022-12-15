import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const loginSchema = Joi.object(
  {
    username: Joi.required(),
    password: Joi.required(),
  },
);

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};

export default validateLogin;