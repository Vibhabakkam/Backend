import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import router from "./routes/userRoutes.js";


const app = express(); // creating an instance of express

dotenv.config(); // configuring the dotenv package to inherit the environment variables

app.use(morgan('dev')); // middlewares that are offered by express instance.
app.use(express.json()); // parse incoming JSON data that is fetched from the frontend.
app.use("/api/v1", router);


// mongoose connection
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("DB connection established."))
.catch((err) => console.log("DB Error ====>", err));

app.listen(process.env.PORT, () => console.log(`Working on port ${process.env.PORT}`));

