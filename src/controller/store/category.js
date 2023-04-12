const { join } = require("path");
const { getCategories } = require("../../database/queries/category/categories");
const addCategory = require("../../database/queries/category/addCategory");
const categoryFormSchema = require("../../utils/validation/category.validation");
const getCat = (req, res) => {
  getCategories()
    .then((result) => {
      res.json(result.rows);
    })
    .catch((err) => console.log("err", err));
};
const addNewCategory = (req, res) => {
  const { name, img_url } = req.body;
  const { error, value } = categoryFormSchema.validate(
    { name, img_url },
    { abortEarly: false }
  );
  if (error) {
    res.send({ error: true, data: { errors: error.details } });
    return;
  } else {
    addCategory({ name, img_url })
      .then(() => res.send({ error: false }))
      .catch((err) => console.log("err:", err));
  }
};
const addCategoryPage = (req, res) => {
  res.sendFile(
    join(
      __dirname,
      "..",
      "..",
      "..",
      "public",
      "html",
      "admin",
      "addCategoryForm.html"
    )
  );
};

module.exports = { getCat, addNewCategory, addCategoryPage };
