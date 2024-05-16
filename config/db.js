
import mongoose from "mongoose";


export const connectDB = async () => {
const conn = await mongoose.connect(process.env.URI, {
    

    
});

console.log(`MongoDatabase connected ${conn.connection.host}`);
} 




