import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const SECRET_KEY = process.env.SECRET_KEY!;

export const generateToken = (userId: number): string => {
  return jwt.sign({ userId }, SECRET_KEY, { expiresIn: '30d' });
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, SECRET_KEY);
};

export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 10);
};

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};