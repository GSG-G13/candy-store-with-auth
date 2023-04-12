const add_button = document.querySelector(".add-candy-button");
const name_input = document.getElementById("name");
const img_url_input = document.getElementById("img_url");
const quantity_input = document.getElementById("quantity");
const categoryInput = document.getElementById("category");
const flavorInput = document.getElementById("flavor");
const priceInput = document.getElementById("price");
const edit_button = document.getElementById("edit");

fetchFunction("/categories").then((res) => createListWithId("category", res));
fetchFunction("/flavors").then((res) => createListWithId("flavor", res));

const validationDOM = (data) => {
  const nameDiv = document.querySelector(".nameDiv");
  const img_urlDiv = document.querySelector(".img_urlDiv");
  const quantityDiv = document.querySelector(".quantityDiv");
  const priceDiv = document.querySelector(".priceDiv");
  const categoryDiv = document.querySelector(".categoryDiv");
  const flavorDiv = document.querySelector(".flavorDiv");
  nameDiv.textContent = "";
  img_urlDiv.textContent = "";
  quantityDiv.textContent = "";
  priceDiv.textContent = "";
  categoryDiv.textContent = "";
  flavorDiv.textContent = "";
  data.forEach((element) => {
    if (element.path[0] === "name") {
      createLabelError(nameDiv, element);
    }

    if (element.path[0] === "img_url") {
      createLabelError( img_urlDiv, element);
    }

    if (element.path[0] === "quantity") {
      createLabelError( quantityDiv, element);
    }

    if (element.path[0] === "price") {
      createLabelError( priceDiv, element);
    }

    if (element.path[0] === "category_id") {
      createLabelError( categoryDiv, element);
    }

    if (element.path[0] === "flavor_id") {
      createLabelError( flavorDiv, element);
    }
  });
};
add_button.addEventListener("click", () => {
  let data = {
    name: name_input.value,
    img_url: img_url_input.value,
    quantity: quantity_input.value,
    price: priceInput.value,
    category_id: categoryInput.value,
    flavor_id: flavorInput.value,
  };
  fetchAdd(`/add_candy`, data);
});
