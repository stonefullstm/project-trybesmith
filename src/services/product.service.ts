import productModel from '../models/product.model';
import { TNewProduct, TProduct } from '../types';

const getAll = async (): Promise<TProduct[]> => {
  const products = await productModel.getAll();
  return products;
};

const create = async (product: TNewProduct) => {
  const newProduct = await productModel.create(product);
  return { status: 201, newProduct };
};

const update = async (productsIds: Array<number>, orderId: number): Promise<void> => {
  const updatePromises = productsIds.map(async (id) => productModel.update({ orderId, id }));
  await Promise.all(updatePromises);
};

export default { getAll, create, update };
