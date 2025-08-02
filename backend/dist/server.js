import express from "express";
const app = express();
const port = 3002;
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