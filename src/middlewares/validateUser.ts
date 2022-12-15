import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const userSchema = Joi.object(
  {
    username: Joi.required(),
    password: Joi.required(),
  },
);

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};

export default validateUser;