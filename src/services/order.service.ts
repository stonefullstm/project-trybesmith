import orderModel from '../models/order.model';
import { TFullOrder, TOrder } from '../types';

const getAll = async (): Promise<TFullOrder[]> => {
  const orders = await orderModel.getAll();
  return orders;
};

const create = async (order: TOrder): Promise<number> => {
  const orderId = await orderModel.create(order);
  return orderId;
};

export default { getAll, create };