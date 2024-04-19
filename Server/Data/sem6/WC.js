const User = require("../../model/sem6/WC");
const { success, error } = require("../../utils/wrapper");


const WC = async (req, res) => {
  try {
    const sec = req.body?.sec;
    const data = await User.find();
    return res.json(success(200, { data }));

    

  } catch (err) {
    return res.json(error(401, err.message));
  }
};

const updateWC = async (req, res) => {};

const studentShowWC = async (req, res) => {
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

module.exports = { WC, updateWC ,studentShowWC };
