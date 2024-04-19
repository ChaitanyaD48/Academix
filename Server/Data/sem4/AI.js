const User = require("../../model/sem4/AI");
const { success, error } = require("../../utils/wrapper");

const AI = async (req, res) => {
  try {
    const sec = req.body.sec;
    const secA = [{}];
    const data = await User.find();
    let i = 0;
    if (sec === "A") {
      for (i; i < 131; i++) {
        secA.push(data[i]);
      }
      return res.json(success(200, { secA }));
    } else {
      res.json(success(200, { data }));
    }
  } catch (err) {
    return res.json(error(401, err.message));
  }
};

const updateAI = async (req, res) => {};

const studentShowAI = async (req, res) => {
  try {
    const MIS = req.body.mis;
    if(!MIS) {
      return res.json(error(403,"All Filled Required"))
    }
    const student = await User.find({MIS});

    return res.json(success(200, { student }));
  } catch (err) {
    return res.json(error(401, err.message));
  }
};

module.exports = { AI, updateAI  ,studentShowAI};
