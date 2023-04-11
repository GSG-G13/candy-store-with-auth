const id = location.href.split("/")[4];
const name_input = document.getElementById("name");
const img_url_input = document.getElementById("img_url");
const quantity_input = document.getElementById("quantity");
const categoryInput = document.getElementById("category");
const flavorInput = document.getElementById("flavor");
const priceInput = document.getElementById("price");
const edit_button = document.getElementById("edit");

const fillForm = (data) => {
  name_input.value = data[0].name;
  img_url_input.value = data[0].img_url;
  quantity_input.value = data[0].quantity;
  categoryInput.value = data[0].category_id;
  flavorInput.value = data[0].flavor_id;
  priceInput.value = data[0].price;
};
const createListWithId = (type, data) => {
  data.forEach((element) => {
    let option = document.createElement("option");
    option.textContent = element.name;
    option.value = element.id;
    if (type === "category") {
      categoryInput.append(option);
    } else if (type === "flavor") {
      flavorInput.append(option);
    }
  });
};
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
      nameDiv.textContent = "";
      const label = document.createElement("label");
      label.textContent = element.message;
      nameDiv.append(label);
    }

    if (element.path[0] === "img_url") {
      img_urlDiv.textContent = "";
      const label = document.createElement("label");
      label.textContent = element.message;
      img_urlDiv.append(label);
    }

    if (element.path[0] === "quantity") {
      quantityDiv.textContent = "";
      const label = document.createElement("label");
      label.textContent = element.message;
      quantityDiv.append(label);
    }

    if (element.path[0] === "price") {
      priceDiv.textContent = "";
      const label = document.createElement("label");
      label.textContent = element.message;
      priceDiv.append(label);
    }

    if (element.path[0] === "category_id") {
      categoryDiv.textContent = "";
      const label = document.createElement("label");
      label.textContent = element.message;
      categoryDiv.append(label);
    }

    if (element.path[0] === "flavor_id") {
      flavorDiv.textContent = "";
      const label = document.createElement("label");
      label.textContent = element.message;
      flavorDiv.append(label);
    }
  });
};

fetchFunction("/categories").then((res) => createListWithId("category", res));
fetchFunction("/flavors").then((res) => createListWithId("flavor", res));
fetchFunction(`/candy/${id}`).then((res) => fillForm(res));
edit_button.addEventListener("click", () => {
  let data = {
    name: name_input.value,
    img_url: img_url_input.value,
    quantity: quantity_input.value,
    price: priceInput.value,
    category_id: categoryInput.value,
    flavor_id: flavorInput.value,
  };
  fetchEdit(`/updateCandy/${id}`, data);
});
