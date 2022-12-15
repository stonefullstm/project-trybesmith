import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { TCreatedProduct, TNewProduct, TProduct } from '../types';
import connection from './connection';

// RowDataPacket => SELECT
// ResultSetHeader => INSERT, DELETE, UPDATE
// OkPacket => SET (protocol_41)

const getAll = async (): Promise<TProduct[]> => {
  const [products] = await connection
    .execute<RowDataPacket[] & TProduct[]>('SELECT * FROM Trybesmith.products;');
  return products;
};

const create = async (product: TNewProduct): Promise<TCreatedProduct> => {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: TCreatedProduct = { id, name, amount };
  return newProduct;
};

const update = async ({ orderId, id }: Partial<TProduct>): Promise<void> => {
  await connection.execute(
    'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
    [orderId, id],
  );
};

export default { getAll, create, update };
