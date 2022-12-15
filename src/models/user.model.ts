import { ResultSetHeader } from 'mysql2';
import { TLogin, TNewUser, TUserCredentials } from '../types';
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

const getByNameAndPassword = async (login: TLogin): Promise<TNewUser | null> => {
  const [result] = await connection.execute(
    'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',
    [login.username, login.password],
  );
  const [user] = result as TNewUser[];
  return user;
};

export default { create, getByNameAndPassword };
