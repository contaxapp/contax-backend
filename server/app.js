import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/index";
import contactRouter from "./routes/contact";

// Express + Mongoose setup
const app = express();
const mongoose = require("mongoose");

// Middleware setup

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

// Database connection

const dbUsername = process.env.DEV_DB_USERNAME;
const dbPassword = process.env.DEV_DB_PASSWORD;
const connectionString = `mongodb+srv://${dbUsername}:${dbPassword}@dex-dev-jpy4j.mongodb.net/dex-dev?retryWrites=true&w=majority`;

mongoose.connect(connectionString, { useNewUrlParser: true , useUnifiedTopology: true });
mongoose.connection.on("error", (err) => {
  console.error(err);
  console.log("%s MongoDB connection error. Please make sure MongoDB is running.");
  process.exit();
});

mongoose.connection.once("open", function() {
    console.log("We connected");
});

// Router setup

app.use("/", indexRouter);
app.use("/contact", contactRouter);

export default app;
