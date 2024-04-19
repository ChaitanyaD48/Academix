const { AC, updateAC, studentShowAC } = require("./AC");
const { CD, updateCD, studentShowCD } = require(`./CD`);
const { AEC, updateAEC, studentShowAEC } = require(`./AEC`);
const { AI, updateAI, studentShowAI } = require(`./AI`);
const { CN, updateCN, studentShowCN } = require(`./CN`);
const { DS, updateDS, studentShowDS } = require(`./DS`);
const { Java, updateJava, studentShowJava } = require(`./Java`);
const { OS, updateOS, studentShowOS } = require(`./OS`);
const { SNS, updateSNS, studentShowSNS } = require(`./SNS`);

module.exports = {
  AC,
  updateAC,
  updateAEC,
  updateAI,
  updateCD,
  updateCN,
  updateDS,
  updateJava,
  updateOS,
  updateSNS,
  CD,
  AEC,
  AI,
  CN,
  DS,
  Java,
  OS,
  SNS,

  studentShowAC,
  studentShowAEC,
  studentShowAI,
  studentShowCD,
  studentShowCN,
  studentShowDS,
  studentShowJava,
  studentShowOS,
  studentShowSNS,
};
