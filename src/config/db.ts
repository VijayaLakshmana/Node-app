import mongoose from 'mongoose';

export default function dataBase() {
  mongoose
    .connect('mongodb://localhost:27017/myapp')
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
}

