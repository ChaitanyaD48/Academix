const model = require("../model/model.js");
const { success, error } = require("../utils/wrapper.js");
// POST : localhost:8080/api/create_categories

// res.send(error(403, "Subject Already In Use"));
// res.json(success(200, "Successfully Signup"));
async function create_Categories(req, res) {
  try {
    const Create = new model.Categories({
      // type: req.body.type,
      // color: req.body.color
      type: "Investment",
      color: "#008DDA",
    });

    await Create.save();
    return res.json(success(200, Create));
  } catch (error) {
    // console.error(error);
    return res.send(error(500, "Error creating category"));
  }
}

async function get_Categories(req, res) {
  try {
    let data = await model.Categories.find({});
    let filter = await data.map((v) =>
      Object.assign({}, { type: v.type, color: v.color })
    );
    return res.json(success(200, filter));
  } catch (error) {
    // console.error(error);
    return res.send(error(500, "Error fetching categories"));
    // res.status(500).send({ message: "Error fetching categories" });
  }
}

//POST request to api/transaction
async function create_Transaction(req, res) {
  if (!req.body) return res.send(error(500, "POST HTTP Data not provided"));

  try {
    let { name, type, amount } = req.body;

    const create = await new model.Transaction({
      name,
      type,
      amount,
      date: new Date(),
    });

    await create.save();
    return res.json(success(200, Create));
  } catch (error) {
    // console.error(error);
    return res.send(error(500, "Error creating transaction"));
    // res.status(500).send({ message: "Error creating transaction" });
  }
}

//  get: http://localhost:8080/api/transaction
async function get_Transaction(req, res) {
  let data = await model.Transaction.find({});
  return res.json(success(200, data));
}

//  delete: http://localhost:8080/api/transaction
async function delete_Transaction(req, res) {
  if (!req.body) {
    return res.send(error(500, "Request body not Found"));
    // return res.status(400).json({ message: "Request body not Found" });
  }

  try {
    // Use await with deleteOne() to handle the promise
    await model.Transaction.deleteOne(req.body);
    return res.json(success(200, "Record Deleted...!"));
  } catch (error) {
    // console.error(error);
    return res.send(error(500, "Error while deleting Transaction Record"));
  }
}

//  get: http://localhost:8080/api/labels
async function get_Labels(req, res) {
  model.Transaction.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "type",
        foreignField: "type",
        as: "categories_info",
      },
    },
    {
      $unwind: "$categories_info",
    },
  ])
    .then((result) => {
      let data = result.map((v) =>
        Object.assign(
          {},
          {
            _id: v._id,
            name: v.name,
            type: v.type,
            amount: v.amount,
            color: v.categories_info["color"],
          }
        )
      );
      return res.json(success(200, data));
    })
    .catch((error) => {
      return res.send(error(500, "Looup Collection Error"));
    });
}

module.exports = {
  create_Transaction,
  get_Transaction,
  create_Categories,
  get_Categories,
  delete_Transaction,
  get_Labels,
};
