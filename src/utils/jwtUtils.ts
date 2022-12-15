import jwt from 'jsonwebtoken';
import { TUserToken } from '../types';

const createToken = (data: TUserToken) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET as string, {
    expiresIn: '2d',
    algorithm: 'HS256',
  });

  return token;
};

export default {
  createToken,
};