import express from 'express';
import jobRoutes from './routes/jobRoutes';
import authRoutes from './routes/authRoutes'; // Import authRoutes
import { errorHandler } from './utils/errorHandler';
import { setupSwagger } from './utils/swagger';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Register Routes
app.use('/auth', authRoutes); // Register authRoutes under /auth
app.use('/api', jobRoutes); // Register jobRoutes under /api

// Root route
app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).json({ message: 'Welcome to the Job Board API! Visit /api-docs for documentation.' });
});

// Swagger setup
setupSwagger(app);

// Error handler middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});