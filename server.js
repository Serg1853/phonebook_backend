import { connectDb } from "./db/connectDb.js";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const { PORT } = process.env;



const startServer = async () => {
  try {
    await connectDb();
    app.listen( PORT , () => {
    //   console.log("Server is running. Use our API on port: 3000");
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
startServer();