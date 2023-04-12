const { join } = require("path");
const { getFlavers } = require("../../database/queries/flavor/flavors");
const addFlavor = require("../../database/queries/flavor/addFlavor");
const categoryFormSchema = require("../../utils/validation/category.validation");
const getFlav = (req, res) => {
  getFlavers()
    .then((result) => {
      res.json(result.rows);
    })
    .catch((err) => console.log("err", err));
};
const addNewFlavor = (req, res) => {
  const { name, img_url } = req.body;
  const { error, value } = categoryFormSchema.validate(
    { name, img_url },
    { abortEarly: false }
  );
  if (error) {
    res.send({ error: true, data: { errors: error.details } });
    return;
  } else {
    addFlavor({ name, img_url })
      .then(() => res.send({ error: false }))
      .catch((err) => console.log("err:", err));
  }
};

const addFlavorPage = (req, res) => {
  res.sendFile(
    join(
      __dirname,
      "..",
      "..",
      "..",
      "public",
      "html",
      "admin",
      "addFlavorForm.html"
    )
  );
};

module.exports = { getFlav, addNewFlavor, addFlavorPage };
