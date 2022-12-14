import { Request, Response } from 'express';
import userService from '../services/user.service';
import { TUserCredentials } from '../types';
// import jwtUtils from '../utils/jwtUtils';

const create = async (req: Request, res: Response) => {
  const user = req.body as TUserCredentials;
  const { status, token } = await userService.create(user);
  // const { id, username, vocation, level } = newUser;
  // const token = jwtUtils.createToken({ id, username, vocation, level });
  res.status(status).json({ token });
};

export default { create };