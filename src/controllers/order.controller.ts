import { Request, Response } from 'express';
import orderService from '../services/order.service';
import productService from '../services/product.service';

const getAll = async (req: Request, res: Response) => {
  const orders = await orderService.getAll();
  res.status(200).json(orders);
};

const create = async (req: Request, res: Response): Promise<void> => {
  const order = req.body;
  const { id: userId } = order.user;
  
  const { productsIds } = order;
  
  const orderId = await orderService.create({ userId });
  await productService.update(productsIds, orderId);

  res.status(201).json({ orderId, userId, productsIds });
};

export default { getAll, create };