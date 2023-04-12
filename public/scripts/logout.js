const fetchLogout = (url) =>
  fetch(url)
    .then((data) => data.json())
    .then((err) => {
      if (err.error === false) {
        location.href = "/login";
      } else {
        console.log(err);
      }
    })
    .catch((error) => console.log(error));
const logout_button = document.querySelector(".logout");

logout_button.addEventListener("click", () => {
  fetchLogout("/logout");
});
