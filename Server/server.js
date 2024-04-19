const express = require("express");
const app = express();
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config("./.env");

const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(require("./router/route.js"));

const con = require("./DB/connection.js");

con
  .then(db => {
    if (!db) return process.exit(1);

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });

    app.on("error", err => {
      console.log(`Server error: ${err}`);
    });
  })
  .catch(e => {
    console.log(e);
  });


