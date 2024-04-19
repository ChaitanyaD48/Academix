const {
  updateCNVMarks,
  updateDSAMarks,
  studentShowCNVMarks,
  studentShowDSAMarks
} = require("../../Data/sem2");

const {} = require("../../Data/sem4");

const {} = require("../../Data/sem6");

const route = require("express").Router();

route.post("/cnv", updateCNVMarks);
route.post("/show/cnv", studentShowCNVMarks);
route.post("/dsa", updateDSAMarks);
route.post("/show/dsa", studentShowDSAMarks);

module.exports = route;
