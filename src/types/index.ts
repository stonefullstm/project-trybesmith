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

export type TNewUser = {
  id: number,
  username: string,
  vocation: string,
  level: number,
  password: string,
};

export type TUserToken = {
  id: number,  
  username: string,
  vocation: string,
  level: number,
};

export type TUserCredentials = {
  username: string,
  vocation: string,
  level: number,
  password: string,
};

export type TToken = {
  payload: {
    id: number;
    name: string;
    email: string;
    password: string;
  };
  iat: number;
  exp: number;
};
