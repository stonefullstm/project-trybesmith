import productModel from '../models/product.model';
import { TProduct } from '../types';

const getAll = async (): Promise<TProduct[]> => {
  const products = await productModel.getAll();
  return products;
};

export default { getAll };
