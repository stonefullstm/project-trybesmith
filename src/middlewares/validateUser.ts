import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const userSchema = Joi.object(
  {
    username: Joi.string().min(3).required(),
    vocation: Joi.string().min(3).required(),
    level: Joi.number().min(1).required(),
    password: Joi.string().min(8).required(),
  },
);

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    const [details] = error.details;
    const statusCode = details.type === 'any.required' ? 400 : 422; 
    return res.status(statusCode).json({ message: error.message });
  }
  next();
};

export default validateUser;