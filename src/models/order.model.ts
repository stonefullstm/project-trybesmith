import { RowDataPacket } from 'mysql2/promise';
import { TFullOrder } from '../types';
import connection from './connection';

// RowDataPacket => SELECT
// ResultSetHeader => INSERT, DELETE, UPDATE
// OkPacket => SET (protocol_41)

const getAll = async (): Promise<TFullOrder[]> => {
  const [orders] = await connection.execute<RowDataPacket[] & TFullOrder[]>(
    `SELECT o.id as id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.orders as o
    INNER JOIN Trybesmith.products as p
    ON p.order_id = o.id
    GROUP BY o.id, o.user_id`,
  );
  return orders;
};

export default { getAll };
