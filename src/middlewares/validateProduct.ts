import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const productSchema = Joi.object(
  {
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  },
);

const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const { error } = productSchema.validate(req.body);
  if (error) {
    const [details] = error.details;
    const statusCode = details.type === 'any.required' ? 400 : 422; 
    return res.status(statusCode).json({ message: error.message });
  }
  next();
};

export default validateProduct;