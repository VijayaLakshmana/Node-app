import mongoose, { Schema, Document } from 'mongoose';

interface User extends Document {
    _id: string;
    name: string;
    email: string;
    age:number;
}

const userSchema: Schema = new mongoose.Schema({
    _id: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    age:{
        type:Number,
        required: true,
    }
});

const User = mongoose.model<User>('User', userSchema);

export default User;
