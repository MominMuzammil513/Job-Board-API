import express, { Request, Response } from 'express';
import { generateToken } from '../utils/auth';

const router = express.Router();

// Define the shape of the request body
interface LoginRequestBody {
  userId: number;
}

// Route handler for POST /login
router.post('/login', (req: Request<{}, {}, LoginRequestBody>, res: Response): void => {
  const { userId } = req.body;

  // Validate the request body
  if (!userId) {
    res.status(400).json({ message: 'User ID is required' });
    return;
  }

  // Generate a token
  const token = generateToken(userId);

  // Send the token in the response
  res.status(200).json({ token });
  return;
});

export default router;