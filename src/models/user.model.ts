import { ResultSetHeader } from 'mysql2';
import { TNewUser, TUserCredentials } from '../types';
import connection from './connection';

const create = async (user: TUserCredentials): Promise<TNewUser> => {
  const { username, vocation, level, password } = user;

  const query = `INSERT INTO Trybesmith.users 
    (username, vocation, level, password) VALUES (?, ?, ?, ?)`;
  const values = [username, vocation, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newUser: TNewUser = { id, username, vocation, level, password };
  return newUser;
};

export default { create };
