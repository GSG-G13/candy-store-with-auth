const cardsContainer = document.querySelector(".card_container");
const category_id = document.querySelector(".category_id");
const flavor_id = document.querySelector(".flavor_id");
const createCard = (data) => {
  cardsContainer.textContent = "";
  data.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cover = document.createElement("img");
    cover.classList.add("cover");

    cover.setAttribute("src", element.img_url);

    const name = document.createElement("h3");
    name.classList.add("name");
    name.textContent = element.name;

    const quantity = document.createElement("p");
    quantity.classList.add("quantity");
    quantity.textContent = "Available Quantity:" + element.quantity;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = "price: " + element.price;

    const category_name = document.createElement("p");
    category_name.classList.add("category");
    category_name.textContent = element.category_name;

    const flavor_name = document.createElement("p");
    flavor_name.classList.add("flavor");
    flavor_name.textContent = element.flavor_name;


    card.append(
      cover,
      name,
      quantity,
      price,
      category_name,
      flavor_name,
    );

    cardsContainer.append(card);
  });
};

const createList = (type, data) => {
  data.forEach((element) => {
    let option = document.createElement("option");
    option.textContent = element.name;
    option.value = element.name;
    if (type === "category") {
      category_id.append(option);
    } else if (type === "flavor") {
      flavor_id.append(option);
    }
  });
};

// const createListWithId = (type, data) => {
//   data.forEach((element) => {
//     let option = document.createElement("option");
//     option.textContent = element.name;
//     option.value = element.id;
//     if (type === "category") {
//       category_id.append(option);
//     } else if (type === "flavor") {
//       flavor_id.append(option);
//     }
//   });
// };
