const {
  StudentSignupController,
  StudentloginController,
  refreshController,
} = require("../../Controllers/Student/Authentication");


const route = require('express').Router();

route.post("/signup", StudentSignupController);
route.post("/login", StudentloginController);
route.post("/refersh", refreshController);

module.exports=route;
