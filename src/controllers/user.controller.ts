import { Request, Response } from 'express';
import userService from '../services/user.service';
import { TUserCredentials, TUserToken } from '../types';
import jwtUtils from '../utils/jwtUtils';

const create = async (req: Request, res: Response) => {
  const user = req.body as TUserCredentials;
  const { status, token } = await userService.create(user);
  res.status(status).json({ token });
};

const login = async (req: Request, res: Response): Promise<Response | void> => {
  const { username, password } = req.body;
  const user = await userService.getByNameAndPassword(req.body);

  if (!user || username !== user.username || password !== user.password) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  const token = jwtUtils.createToken(user as TUserToken);
  res.status(200).json({ token });
};

export default { create, login };