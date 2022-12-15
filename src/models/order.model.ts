import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { TFullOrder, TOrder } from '../types';
import connection from './connection';

const getAll = async (): Promise<TFullOrder[]> => {
  const [orders] = await connection.execute<RowDataPacket[] & TFullOrder[]>(
    `SELECT o.id as id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.orders as o
    INNER JOIN Trybesmith.products as p
    ON p.order_id = o.id
    GROUP BY o.id, o.user_id;`,
  );
  return orders;
};

const create = async (order: TOrder): Promise<number> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
    [order.userId],
  );
  return insertId;
};

export default { getAll, create };
