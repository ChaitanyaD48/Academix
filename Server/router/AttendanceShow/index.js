const {
  CNV,
  DLD,
  DSA,
  EM2,
  Humanities,
  EntreStudies,
  OOPL,
  updateCNV,
  updateDLD,
  updateDSA,
  updateEM2,
  updateEntreStudies,
  updateHumanities,
  updateOOPL,

  updateCNVMarks,

  studentShowCNV,
  studentShowDLD,
  studentShowDSA,
  studentShowEM2,
  studentShowEntreStudies,
  studentShowHumanities,
  studentShowOOPL,

  studentShowCNVMarks,
} = require("../../Data/sem2");

const {
  AC,
  AEC,
  AI,
  CD,
  CN,
  DS,
  SNS,
  OS,
  updateAC,
  updateAEC,
  updateAI,
  updateCD,
  updateCN,
  updateDS,
  updateJava,
  updateOS,
  updateSNS,
  Java,

  studentShowAC,
  studentShowAEC,
  studentShowAI,
  studentShowCD,
  studentShowCN,
  studentShowDS,
  studentShowJava,
  studentShowOS,
  studentShowSNS,
} = require("../../Data/sem4");

const {
  CC,
  CCBT,
  CG,
  IOT,
  ISS,
  ITC,
  WC,
  ES,
  AGT,
  CV,
  updateAGT,
  updateCC,
  updateCCBT,
  updateCG,
  updateCV,
  updateES,
  updateIOT,
  updateISS,
  updateITC,
  updateWC,
  studentShowCC,
  studentShowCG,
  studentShowCV,
  studentShowES,
  studentShowIOT,
  studentShowISS,
  studentShowITC,
  studentShowWC,
} = require("../../Data/sem6");

const route = require("express").Router();

route.post("/cnv", CNV);
route.post("/dld", DLD);
route.post("/dsa", DSA);
route.post("/humanities", Humanities);
route.post("/entrestudies", EntreStudies);
route.post("/oopl", OOPL);
route.post("/em2", EM2);

route.post("/student/cnv", studentShowCNV);
route.post("/student/dld", studentShowDLD);
route.post("/student/dsa", studentShowDSA);
route.post("/student/humanities", studentShowHumanities);
route.post("/student/entrestudies", studentShowEntreStudies);
route.post("/student/oopl", studentShowOOPL);
route.post("/student/em2", studentShowEM2);

route.post("/update/cnv", updateCNV);
route.post("/update/dld", updateDLD);
route.post("/update/dsa", updateDSA);
route.post("/update/humanities", updateHumanities);
route.post("/update/entrestudies", updateEntreStudies);
route.post("/update/oopl", updateOOPL);
route.post("/update/em2", updateEM2);


route.post("/marks/cnv", updateCNVMarks);
route.post("/marks/show/cnv", updateCNVMarks);


route.post("/ac", AC);
route.post("/aec", AEC);
route.post("/ai", AI);
route.post("/sns", SNS);
route.post("/cd", CD);
route.post("/java", Java);
route.post("/cn", CN);
route.post("/os", OS);
route.post("/ds", DS);

route.post("/student/ac", studentShowAC);
route.post("/student/aec", studentShowAEC);
route.post("/student/ai", studentShowAI);
route.post("/student/sns", studentShowSNS);
route.post("/student/cd", studentShowCD);
route.post("/student/java", studentShowJava);
route.post("/student/cn", studentShowCN);
route.post("/student/os", studentShowOS);
route.post("/student/ds", studentShowDS);

route.post("/update/ac", updateAC);
route.post("/update/aec", updateAEC);
route.post("/update/ai", updateAI);
route.post("/update/sns", updateSNS);
route.post("/update/cd", updateCD);
route.post("/update/java", updateJava);
route.post("/update/cn", updateCN);
route.post("/update/os", updateOS);
route.post("/update/ds", updateDS);

route.post("/cg", CG);
route.post("/cv", CV);
route.post("/cc", CC);
route.post("/ccbt", CCBT);
route.post("/agt", AGT);
route.post("/iot", IOT);
route.post("/itc", ITC);
route.post("/wc", WC);
route.post("/es", ES);
route.post("/iss", ISS);

route.post("/student/cg", studentShowCG);
route.post("/student/cv", studentShowCV);
route.post("/student/cc", studentShowCC);
// route.post("/student/ccbt", updateCCBT);
// route.post("/student/agt", updateAGT);

route.post("/student/iot", studentShowIOT);
route.post("/student/itc", studentShowITC);
route.post("/student/wc", studentShowWC);
route.post("/student/es", studentShowES);
route.post("/student/iss", studentShowISS);

route.post("/update/cg", updateCG);
route.post("/update/cv", updateCV);
route.post("/update/cc", updateCC);
route.post("/update/ccbt", updateCCBT);
route.post("/update/agt", updateAGT);
route.post("/update/iot", updateIOT);
route.post("/update/itc", updateITC);
route.post("/update/wc", updateWC);
route.post("/update/es", updateES);
route.post("/update/iss", updateISS);

module.exports = route;
