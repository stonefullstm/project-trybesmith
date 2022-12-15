import jwt from 'jsonwebtoken';
import { TUserToken } from '../types';

const secret = process.env.JWT_SECRET || 'secret';

const createToken = (data: TUserToken) => {
  const token = jwt.sign({ data }, secret, {
    expiresIn: '2d',
    algorithm: 'HS256',
  });

  return token;
};

// const validateToken = (token) => {
//   try {
//     const { data } = jwt.verify(token, process.env.JWT_SECRET as string);
//     return data;
//   } catch (_e) {
//     const e = new Error('Token inválido');
//     throw e;
//   }
// };

export default {
  createToken,
};