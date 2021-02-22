import mongoose from "mongoose";
import { IUser } from "../interfaces/IUser";

const User = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: true
    },
    email: {
        type: String,
        unique: true,
        index: true
    },
    phone: {
        type: String,
        index: true
    },
    password: {
        type: String,
    },
    salt: {
        type: String,
    },
    birthday: {
        type: Date,
        required: true
    },
}, {
    timestamps: {
        createdAt: 'created_at'
    }
});

export default mongoose.model<IUser & mongoose.Document>("User", User);
