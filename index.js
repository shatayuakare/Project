import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import userRoute from "./route/User.router.js"
import serverless from "serverless-http";

const app = express();
dotenv.config();


app.use(express.json());
app.use(cors())
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;


app.get("/", (req, res) => {
    res.json("Hello World")
})
try {
    // await mongoose.connect(URI, {
    //     useNewUrlParser: true,
    //     // useCreateIndex: true,
    //     useUnifiedTopology: true,
    //     // useFindandModify: false
    // });

    await mongoose.connect(URI);
    console.log("Mongo Connected")
} catch (error) {
    console.log("Mongo DB Not Connected", error)
}

export const handler = serverless(app);
// app.use("/try", (req, res) => res.send("Hellow"))

app.use("/auth", userRoute)
app.listen(PORT, () => console.log(`Port : ${PORT}`))
