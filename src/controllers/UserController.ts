import { Request, Response } from 'express';
import User from '../models/userModel';
// import { UserView } from '../views/userView';

// const userView = new UserView(); 
export const getAllUsers = async (req: Request, res: Response) => {
    
    try {
        const users = await User.find();
        res.json(users);
        // userView.renderUserList(users, res); 
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const createUser = async (req: Request, res: Response) => {
    const { _id,name, email,age } = req.body;
    try {
        const newUser = await User.create({ _id,name, email,age });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: 'Invalid data' });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { name, email,age } = req.body;
    try {
        const user = await User.findByIdAndUpdate(id, { name, email,age }, { new: true });
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Invalid data' });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndDelete(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

