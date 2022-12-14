import { Request, Response } from 'express';
import productService from '../services/product.service';

const getAll = async (req: Request, res: Response) => {
  const products = await productService.getAll();
  res.status(200).json(products);
};

export default { getAll };
