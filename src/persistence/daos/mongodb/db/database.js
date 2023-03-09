import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectionString = process.env.MONGO_ATLAS || "mongodb://localhost:27017/coderhouse";

export const initMongoDB = async () => {
    try {
        await mongoose.connect(connectionString);
    } catch (err) {
        console.log(err);
        return err;
    }
};
