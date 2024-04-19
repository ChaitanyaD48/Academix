const {
  AGTSignupControllers,
  CCSignupControllers,
  CCBTSignupControllers,
  CGSignupControllers,
  CVSignupControllers,
  WCSignupControllers,
  IOTSignupControllers,
  ITCSignupControllers,
  ISSSignupControllers,
  ESSignupControllers,
  SecASignupControllers,
  SecBSignupControllers,
} = require("../../../Controllers/Sem/sem6");

const route=require('express').Router();

route.post('/agt',AGTSignupControllers);
route.post("/cc",CCSignupControllers);
route.post('/ccbt',CCBTSignupControllers);
route.post('/cg',CGSignupControllers);
route.post('/cv',CVSignupControllers);
route.post('/wc',WCSignupControllers);
route.post('/iot',IOTSignupControllers);
route.post('/itc',ITCSignupControllers);
route.post('/iss',ISSSignupControllers)
route.post('/es',ESSignupControllers);
route.post('/secA',SecASignupControllers);
route.post('/secB',SecBSignupControllers);

module.exports=route;
