import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const orderSchema = Joi.object(
  {
    productsIds: Joi.array().items(Joi.required()).required(),
    // user: Joi.object(),
  },
).messages({ 
  'array.includesRequiredUnknowns': '"productsIds" must include only numbers',
});

const validateOrder = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  const { error } = orderSchema.validate({ productsIds });
  if (error) {
    const [details] = error.details;
    const statusCode = details.type === 'any.required' ? 400 : 422; 
    return res.status(statusCode).json({ message: error.message });
  }
  next();
};

export default validateOrder;