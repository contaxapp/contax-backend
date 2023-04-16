import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import incontaxRouter from "./routes/incontax";
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

app.use("/", incontaxRouter);
app.use("/contact", contactRouter);

export default app;
