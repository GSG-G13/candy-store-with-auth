const name_ = document.querySelector(".name");
fetchFunction("/getUsername").then((res) =>name_.textContent =res);
