import userModel from '../models/user.model';
import { TUserCredentials } from '../types';
import jwtUtils from '../utils/jwtUtils';

const create = async (user: TUserCredentials) => {
  const newUser = await userModel.create(user);
  // const { id, username, vocation, level } = newUser;
  const token = jwtUtils.createToken(newUser);
  return { status: 201, token };
};

export default { create };