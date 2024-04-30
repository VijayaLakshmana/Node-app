import { Request, Response, ErrorRequestHandler } from 'express';
const userErrorHandler:ErrorRequestHandler=(err:Error, req:Request, res:Response,) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
};
  
export default userErrorHandler;