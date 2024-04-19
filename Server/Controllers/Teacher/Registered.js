const User = require("../../model/Teacher/Teacher");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { success, error } = require("../../utils/wrapper");
const TeacherSignupControllers = async (req, res) => {
  try {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    const subject = req.body.subject;
    const sem = req.body.sem;

    if (!email || !name || !password || !subject || !sem)
      return res.send(error(403, "All Filed Required"));
    const oldUser = await User.find({ subject });

    console.log(oldUser);
    if (oldUser.length == 1) {
      return res.send(error(403, "Subject Already In Use"));
    }
    const newUser = await User.create({
      email,
      name,
      password,
      subject,
      sem,
    });

    newUser.save();
    return res.json(success(200, "Successfully Signup"));
  } catch (err) {
    return res.send(error(403, err.message));
  }
};
const TeacherloginController = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const subject = req.body.subject;

  if (!email || !password || !subject) {
    // return res.status(404).send("all fileds required");
    return res.send(error(402, "All Fileds Required"));
  }

  const olduser = await User?.findOne({ subject })?.select("+password");
  if (!olduser) {
    // return res.status(404).send("user not found");
    return res.send(error(404, "user not found"));
    //   return res.send(error(404, "user not found"));
  }
  const verri = password === olduser?.password && olduser?.email === email;
  // const verri = await bcrypt?.compare(password, olduser?.password);
  if (!verri) {
    // return res.status(401).send("Incorrect password");
    return res.send(error(403, "Incorrect password or Email"));
  }

  const token = generateAccesstoken({ _id: olduser._id });
  const Referstoken = generateRefershtoken({ _id: olduser._id });
  res.cookie("jwt", Referstoken, {
    httponly: true,
    secure: true,
  });
  res.json(success(200, { token, subject }));
  // res.send({token})
};

const generateAccesstoken = data => {
  try {
    const token = jwt.sign(data, process.env.accessToken, {
      expiresIn: "1y",
    });

    return token;
  } catch (e) {
    // return res.send(e.message);
    return res.send(error(500, e.message));
  }
};

const generateRefershtoken = data => {
  try {
    const token = jwt.sign(data, process.env.RefershToken, {
      expiresIn: "1y",
    });

    return token;
  } catch (e) {
    return res.send(error(500, e.message));
    // return ressend(e.message);
  }
};
const refreshController = async (req, res) => {
  const refreshToken = req.cookies?.jwt;
  // console.log(req.cookies);
  if (!refreshToken) {
    // return res.send("refresh token required");
    return res.send(error(401, "refresh token required"));
  }
  try {
    const verri = jwt.verify(refreshToken, process.env.RefershToken);
    const accestoken = generateAccesstoken({ _id: verri._id });
    res.json(success(200, { accestoken }));
  } catch (e) {
    // return res.send("invaild refresh key");

    return res.send(error(401, "invaild refresh key"));
  }
};
module.exports = {
  TeacherSignupControllers,
  TeacherloginController,
  refreshController,
};
