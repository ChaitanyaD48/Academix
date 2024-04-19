const mongoose = require("mongoose");

const connection1 = mongoose
  .connect(process.env.ATLAS_URI)
  .then(db => {
    console.log("Connected to MongoDB - Finance Tracker");
    return db;
  })
  .catch(e => {
    console.log(e);
  });

module.exports = connection1;
