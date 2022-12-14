export type TProduct = {
  id?: number,
  name: string,
  amount: number,
  orderId?: number
};

export type TNewProduct = {
  name: string,
  amount: number,
};

export type TCreatedProduct = {
  id: number,
} & TNewProduct;

export type TOrder = {
  id?: number,
  userId?: number,
};

export type TProductsOrder = {
  productsIds: number[],
};

export type TFullOrder = TOrder & TProductsOrder;
