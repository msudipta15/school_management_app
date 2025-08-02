import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 3002;
const db_url = process.env.MONGODB_URL;
if (db_url) {
    try {
        console.log("Connecting to db......");
        mongoose.connect(db_url);
        console.log("Connected to database");
    }
    catch (error) {
        console.log(error);
    }
}
else {
    console.log("Invalid Database url !");
}
app.get("/", (req, res) => {
    res.json("hello");
});
try {
    app.listen(port);
    console.log(`Server running on port : ${port}`);
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=server.js.map