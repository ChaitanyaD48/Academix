const User = require("../../model/Sem2/DSA");
const { success, error } = require("../../utils/wrapper");
const DSA = async (req, res) => {
  try {
    const sec = req.body.sec;
    const secA = [{}];
    const data = await User.find();
    let i = 0;
    if (sec === "A") {
      for (i; i < 135; i++) {
        secA.push(data[i]);
      }
      return res.json(success(200, { secA }));
    } else {
      const secB = [{}];
      for (i = 135; i < data.length; i++) {
        secB.push(data[i]);
      }
      return res.json(success(200, { secB }));
    }
  } catch (err) {
    return res.json(error(401, err.message));
  }
};
const updateDSA = async (req, res) => {
  const result = req.body?.data;
  const sec = req.body?.sec;

  // console.log(sec);
  try {
    const data = await User.find();
    let index = 0;
    if (sec == "A") {
      for (let i = 1; i < 136; i++) {
        // data[index].currentAbsent=0;
        // data[index].currentPercentage=0;
        // data[index].currentPresent=0;
        // data[index].totalClass=0;
        if (result[i]?.current == true) {
          let currPer = data[index]?.currentPresent;
          currPer = currPer + 1;
          data[index].currentPresent = currPer;
        } else {
          let currAbs = data[index]?.currentAbsent;
          currAbs = currAbs + 1;
          data[index].currentAbsent = currAbs;
        }
        let total = data[index]?.totalClass;
        total = total + 1;
        data[index].totalClass = total;

        let per = (data[index]?.currentPresent / total) * 100;
        data[index].currentPercentage = per.toFixed(2);
        await data[index].save();
        index++;
      }
    } else {
      index = 135;
      for (let i = 1; i < result.length; i++) {
        // data[index].currentAbsent=0;
        // data[index].currentPercentage=0;
        // data[index].currentPresent=0;
        // data[index].totalClass=0;

        if (result[i]?.current == true) {
          let currPer = data[index]?.currentPresent;
          currPer = currPer + 1;
          data[index].currentPresent = currPer;
          //  console.log(data[index]);
        } else {
          let currAbs = data[index]?.currentAbsent;
          currAbs = currAbs + 1;
          data[index].currentAbsent = currAbs;
        }
        let total = data[index]?.totalClass;
        total = total + 1;
        data[index].totalClass = total;

        let per = (data[index]?.currentPresent / total) * 100;
        data[index].currentPercentage = per.toFixed(2);
        await data[index].save();
        index++;
      }
    }
    // console.log(result);
    return res.json(success(200, "Successfully updated"));
  } catch (err) {
    console.log(err.message);
    return res.json(error(401, err.message));
  }
};

const studentShowDSA = async (req, res) => {
  try {
    const MIS = req.body.mis;
    if (!MIS) {
      return res.json(error(403, "All Filled Required"));
    }
    const student = await User.find({ MIS });

    return res.json(success(200, { student }));
  } catch (err) {
    return res.json(error(401, err.message));
  }
};

const updateDSAMarks = async (req, res) => {
  const marks = req.body?.marks;
  const sec = req.body?.sec;
 
  try {
    const data = await User.find();
    let index = 0;
    // return res.json(success(200,{data}))
    if (sec == "A") {
      for (let i = 1; i < 136; i++) {
        data[index].t1 =0;
        data[index].t2 =0;
        data[index].t3 =0;

        data[index].t1 += parseInt(marks[i].t1);
        data[index].t2 += parseInt(marks[i].t2);
        data[index].t3 += parseInt(marks[i].t3);
        await data[index].save();
        index++;
      }
    } else {
      index = 135;
      for (let i = 1; i < marks.length; i++) {
        data[index].t1 =0;
        data[index].t2 =0;
        data[index].t3 =0;
        data[index].t1 += marks[i].t1;
        data[index].t2 += marks[i].t2;
        data[index].t3 += marks[i].t3;
        await data[index].save();
        index++;
      }
    }
    // console.log(result);
    return res.json(success(200, "Successfully updated"));
  } catch (err) {
    console.log(err.message);
    return res.json(error(401, err.message));
  }
};
const studentShowDSAMarks = async (req, res) => {
  try {
    const MIS = req.body.mis;
    if (!MIS) {
      return res.json(error(403, "All Filled Required"));
    }
    const student = await User.find({ MIS });

    return res.json(success(200, { student }));
  } catch (err) {
    return res.json(error(401, err.message));
  }
};
module.exports = {
  DSA,
  updateDSA,
  studentShowDSA,
  updateDSAMarks,
  studentShowDSAMarks,
};
