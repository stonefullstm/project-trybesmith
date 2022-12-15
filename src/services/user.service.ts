import userModel from '../models/user.model';
import { TLogin, TNewUser, TUserCredentials } from '../types';
import jwtUtils from '../utils/jwtUtils';

const create = async (user: TUserCredentials) => {
  const newUser = await userModel.create(user);
  const { id, username, vocation, level } = newUser;
  const token = jwtUtils.createToken({ id, username, vocation, level });
  return { status: 201, token };
};

const getByNameAndPassword = async (login: TLogin): Promise<TNewUser | null> => {
  const user = await userModel.getByNameAndPassword(login);
  return user;
};

export default { create, getByNameAndPassword };