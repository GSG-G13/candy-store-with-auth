const CandyFormSchema = require("../../utils/validation/CandyForm.validation");
const {
  getCandy,
  addCandy,
  deleteCandy,
  getCandyId,
  updateCandy,
} = require("../../database/queries/candy");
const { join } = require("path");
const getCandies = (req, res) => {
  getCandy()
    .then((result) => {
      res.json(result.rows);
    })
    .catch((err) => console.log("err:", err));
};

const addNewCandy = (req, res) => {
  const candyInfo = req.body;
  const { name, img_url, quantity, price, category_id, flavor_id } = candyInfo;
  const { error, value } = CandyFormSchema.validate(
    { name, img_url, quantity, price, category_id, flavor_id },
    {
      abortEarly: false,
    }
  );
  if (error) {
    res.send({ error: true, data: { errors: error.details } });
    return;
  } else {
    addCandy(candyInfo)
      .then(() => res.redirect("/adminCandy"))
      .catch((err) => console.log("err:", err));
  }
};

const deleteCandies = (req, res) => {
  deleteCandy(req.params.id)
    .then(() => res.redirect("/adminCandy")) //
    .catch((err) => console.log("err:", err));
};
const updateCandies = (req, res) => {
  const candyInfo = req.body;
  const { name, img_url, quantity, price, category_id, flavor_id } = candyInfo;
  const { error, value } = CandyFormSchema.validate(
    { name, img_url, quantity, price, category_id, flavor_id },
    {
      abortEarly: false,
    }
  );
  if (error) {
    res.send({ error: true, data: { errors: error.details } });
    return;
  } else {
    updateCandy(req.params.id, candyInfo)
      .then(() => res.json({ error: false }))
      .catch((err) => console.log("err:", err));
  }
};
const getAddForm = (req, res) => {
  res.sendFile(
    join(
      __dirname,
      "..",
      "..",
      "..",
      "public",
      "html",
      "admin",
      "addCandyForm.html"
    )
  );
};
const getEditForm = (req, res) => {
  res.sendFile(
    join(
      __dirname,
      "..",
      "..",
      "..",
      "public",
      "html",
      "admin",
      "editCandyForm.html"
    )
  );
};
const getAdminCandy = (req, res) => {
  res.sendFile(
    join(
      __dirname,
      "..",
      "..",
      "..",
      "public",
      "html",
      "admin",
      "candyStore.html"
    )
  );
};
const getCandyById = (req, res) => {
  getCandyId(req.params.id)
    .then((result) => {
      res.json(result.rows);
    })
    .catch((err) => console.log("err:", err));
};

module.exports = {
  getCandies,
  addNewCandy,
  deleteCandies,
  getAddForm,
  getEditForm,
  getCandyById,
  updateCandies,
  getAdminCandy,
};
