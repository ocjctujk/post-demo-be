const express = require("express");
const connectDB = require("./db");
const cors = require('cors');

const port = 8088;

const app = express();
app.use(cors())
app.use(express.json())
const blogRoute = require("./routes/api/blogs");
app.use("/", blogRoute);

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
  
