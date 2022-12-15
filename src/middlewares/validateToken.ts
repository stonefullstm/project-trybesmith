import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default function validateToken(req: Request, res: Response, next: NextFunction) {
  const { authorization: token } = req.headers;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET as string);
    
    req.body.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}
