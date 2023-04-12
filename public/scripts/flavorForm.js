const add_button = document.querySelector(".add-candy-button");
const name_input = document.getElementById("name");
const img_url_input = document.getElementById("img_url");

const validationDOM = (data) => {
  const nameDiv = document.querySelector(".nameDiv");
  const img_urlDiv = document.querySelector(".img_urlDiv");
  nameDiv.textContent = "";
  img_urlDiv.textContent = "";
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
  });
};
add_button.addEventListener("click", () => {
  let data = {
    name: name_input.value,
    img_url: img_url_input.value,
  };
  fetchAdd(`/addFlavor`, data);
});
