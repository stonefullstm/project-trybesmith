import { Request, Response } from 'express';
import productService from '../services/product.service';
import { TNewProduct } from '../types';

const getAll = async (req: Request, res: Response) => {
  const products = await productService.getAll();
  res.status(200).json(products);
};

const create = async (req: Request, res: Response) => {
  const product = req.body as TNewProduct;
  const { status, newProduct } = await productService.create(product);
  res.status(status).json(newProduct);
};

export default { getAll, create };
