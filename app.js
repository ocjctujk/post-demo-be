const express = require("express");
const connectDB = require("./db");

const port = 8080;

const app = express();

connectDB();

app
  .listen(port, () => {
    console.log("App running on port " + port);
  })

  .on("error", (err) => {
    if (err.code == "EADDRINUSE") {
      console.log("Port is already used by server");
    }
  });
