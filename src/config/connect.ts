import { connect } from "mongoose";

const connectDB = async () => {
    const conn = await connect(process.env.MONGO_URI);
    console.log(`Connected to ${conn.connection.host}`);
};

export default connectDB;