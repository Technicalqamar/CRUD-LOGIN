import mongoose from "mongoose";

const connectDb = async () => {
    try {
await mongoose.connect(process.env.MONGO_URI);    
        console.log("MongoDb Connected!");
    } catch (err) {
        console.log("MongoDb Connection Failed!" ,err);
    }
}

export default connectDb;