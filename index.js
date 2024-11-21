const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
const commentRoutes = require("./routes/commentRoutes");

const mongoose = require("mongoose");
mongoose.connect(process.env.DB_CONNECT);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const postsRoute = require("./routes/posts_routes");
app.use("/post", postsRoute);
app.use("/comment", commentRoutes);  // מסלולים לתגובות


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});


