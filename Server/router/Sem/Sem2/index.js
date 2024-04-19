const {
  DSASignupControllers,
  DLDSignupControllers,
  EM2SignupControllers,
  EntreStudiesSignupControllers,
  HumanitiesSignupControllers,
  OOPLSignupControllers,
  SecASignupControllers,
  SecBSignupControllers,
  CNVSignupControllers,
} = require("../../../Controllers/Sem/Sem2");
const route = require("express").Router();
route.post("/dsa", DSASignupControllers);
route.post("/dld", DLDSignupControllers);
route.post("/em2", EM2SignupControllers);
route.post("/oopl", OOPLSignupControllers);
route.post("/entrestudies", EntreStudiesSignupControllers);
route.post("/humanities", HumanitiesSignupControllers);
route.post("/cnv", CNVSignupControllers);
route.post("/secA", SecASignupControllers);
route.post("/secB", SecBSignupControllers);

module.exports = route;
