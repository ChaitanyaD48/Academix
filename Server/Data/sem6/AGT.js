const User = require("../../model/sem6/AGT");
const { success, error } = require("../../utils/wrapper");


const AGT = async (req, res) => {
  try {
    const sec = req.body.sec;
    const secA = [{}];
    const data = await User.find();
    
    
    
    

    return res.json(success(200, { data }));

    

  } catch (err) {
    return res.json(error(401, err.message));
  }
};

const updateAGT = async (req, res) => {};



module.exports = { AGT, updateAGT };
