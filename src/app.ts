import express from 'express';
import dataBase from './config/db';
import userRoutes from './routes/userRoutes';
import helmet from 'helmet';
const app = express();
const PORT = process.env.PORT || 3000;

dataBase();

app.use(express.json());
app.use(helmet());

app.use('/user', userRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
