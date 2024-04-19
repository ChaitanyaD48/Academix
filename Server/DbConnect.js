const mongoose = require("mongoose");

module.exports = async () => {
  await mongoose
    .connect(
      process.env.MongoBD_api,
      // (useNewUrlParser = true),
      // (useUnifiedTopology = true)
    )
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch(e => {
      console.log(e);
    });
};
