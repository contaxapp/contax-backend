#!/usr/bin/env node

/**
 * Module dependencies.
 */
import app from "../app";
import debugLib from "debug";
import http from "http";
import mongoose from "mongoose";
const debug = debugLib("dex-backend:server");

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string"
    ? "Pipe " + port
    : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string"
    ? "pipe " + addr
    : "port " + addr.port;
  debug("Listening on " + bind);
}

/**
 * Database Connection
 */

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


/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);