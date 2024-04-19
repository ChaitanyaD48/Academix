const User = require("../../model/sem6/ES");
const { success, error } = require("../../utils/wrapper");


const ES = async (req, res) => {
  try {
    const sec = req.body?.sec;

    const data = await User.find();
    return res.json(success(200, { data }));

    

  } catch (err) {
    return res.json(error(401, err.message));
  }
};

const updateES = async (req, res) => {};

const studentShowES = async (req, res) => {
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

module.exports = { ES, updateES ,studentShowES };
