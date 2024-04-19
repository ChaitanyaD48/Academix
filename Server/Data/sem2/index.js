const {
  CNV,
  updateCNV,
  studentShowCNV,
  updateCNVMarks,
  studentShowCNVMarks,
} = require("./CNV");
const { DLD, updateDLD, studentShowDLD } = require("./DLD");
const {
  DSA,
  updateDSA,
  studentShowDSA,
  updateDSAMarks,
  studentShowDSAMarks,
} = require("./DSA");
const { EM2, updateEM2, studentShowEM2 } = require("./EM2");
const {
  EntreStudies,
  updateEntreStudies,
  studentShowEntreStudies,
} = require("./EntreStudies");
const {
  Humanities,
  updateHumanities,
  studentShowHumanities,
} = require("./Humanities");
const { OOPL, updateOOPL, studentShowOOPL } = require("./OOPL");

module.exports = {
  CNV,
  DLD,
  DSA,
  EM2,
  EntreStudies,
  Humanities,
  OOPL,
  updateCNV,
  updateDLD,
  updateDSA,
  updateEM2,
  updateEntreStudies,
  updateHumanities,
  updateOOPL,

  updateCNVMarks,
  updateDSAMarks,

  studentShowCNV,
  studentShowDLD,
  studentShowDSA,
  studentShowEM2,
  studentShowEntreStudies,
  studentShowHumanities,
  studentShowOOPL,

  studentShowCNVMarks,
  studentShowDSAMarks,
};
