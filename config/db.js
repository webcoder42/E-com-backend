
import mongoose from "mongoose";

const connectdb = async () => {
   try{
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`connected to the database successfully ${conn.connection.host}`)

   }catch(error){
    console.log(`error in mongodb ${error}`)
   }
};
export default connectdb;
