const {
  AISignupControllers,
  CDSignupControllers,
  CNSignupControllers,
  DSSignupControllers,
  OSSignupControllers,
  JavaSignupControllers,
  SecASignupControllers,
  SecBSignupControllers,
  ACSignupControllers,
  AECSignupControllers,
  SNSSignupControllers,
} = require("../../../Controllers/Sem/sem4");

const route = require("express").Router();
route.post("/ai", AISignupControllers);
route.post("/cd", CDSignupControllers);
route.post("/cn", CNSignupControllers);
route.post("/ds", DSSignupControllers);
route.post("/os", OSSignupControllers);
route.post("/java", JavaSignupControllers);
route.post("/ac", ACSignupControllers);
route.post("/aec", AECSignupControllers);
route.post("/sns", SNSSignupControllers);
route.post("/secA", SecASignupControllers);
route.post("/secB", SecBSignupControllers);

module.exports = route;
