import jwt from 'jsonwebtoken';
import { TUserToken } from '../types';

const createToken = (data: TUserToken) => {
  const { id, username, vocation, level } = data;
  const user: TUserToken = { 
    id,
    username,
    vocation,
    level,
  }; 
  const token = jwt.sign(user, process.env.JWT_SECRET as string, {
    expiresIn: '2d',
    algorithm: 'HS256',
  });

  return token;
};

export default {
  createToken,
};