import orderModel from '../models/order.model';
import { TFullOrder } from '../types';

const getAll = async (): Promise<TFullOrder[]> => {
  const orders = await orderModel.getAll();
  return orders;
};

export default { getAll };