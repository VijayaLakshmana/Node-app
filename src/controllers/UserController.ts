import { Request, Response, NextFunction } from 'express';
import { IUser } from '../models/userModel';
import userService from '../service/userService';
class UserController {
  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user: IUser|boolean = await userService.createUser(req.body);
      if(user===false){
        res.status(409).json({ error: 'Given Email address is already used' });
        return;
      }
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
  async deleteUser(req: Request, res: Response, next: NextFunction) {
    const id: string = req.params.id;
    try {
      const user: IUser | null = await userService.deleteUser(id);
      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const user: object = await userService.getAllUsers();
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
  async getUserById(req: Request, res: Response, next: NextFunction) {
    const id: string = req.params.id;
    try {
      const user: IUser | null = await userService.getUserById(id);
      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
  async updateUser(req: Request, res: Response, next:NextFunction){
    const id:string=req.params.id;
    const { name, email, age } = req.body;
    try{
      const user:IUser|null=await userService.updateUser(id, { name, email, age });
      if (!user) {
        res.status(404).json({ error: 'User not found' });
      }else{
        res.json(user);
      }
    }catch(error){
      next(error);
    }

  }
}
export default new UserController();

