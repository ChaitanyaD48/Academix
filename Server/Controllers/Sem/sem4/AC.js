const User = require("../../../model/sem4/AC");
const ACSignupControllers = async (req, res) => {
  const MIS = req.body.MIS;
  const name = req.body.name;
  const currentPresent = req.body.currentPresent;
  const currentAbsent = req.body.currentAbsent;
  const currentPercentage = req.body.currentPercentage;
  const totalClass = req.body.totalClass;
  const current = req.body.current;

  if (
    !MIS ||
    !name ||
    !currentPercentage ||
    !currentAbsent ||
    !currentPresent ||
    !current ||
    !totalClass
  ) {
    return res.status(400).json("All Filed Are Required");
  }
  const AA = [];
  for (let i = 0; i < AA.length; i++) {
    const newUser = await User.create({
      MIS: AA[i]?.mis,
      name: AA[i]?.name,
      currentPresent,
      currentPercentage,
      currentAbsent,
      current,
      totalClass,
    });
    newUser.save();
  }

  //   const oldUser = await User.findOne({ MIS });
  //   if (oldUser) return res.status(400).json("User Already Registerd");
  //   const newUser = await User.create({
  //     MIS,
  //     name,
  //     currentPresent,
  //     current,
  //     currentAbsent,
  //     currentPercentage,
  //     totalClass,
  //   });
  //   newUser.save();
  res.status(201).send("Success");
};

module.exports = { ACSignupControllers };
