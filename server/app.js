import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/index";
import contactRouter from "./routes/contact";

// Express + Mongoose setup
const app = express();

// Middleware setup

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

// Router setup

app.use("/", indexRouter);
app.use("/contact", contactRouter);

export default app;
