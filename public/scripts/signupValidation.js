const signup_btn = document.querySelector("#signup_btn");
const userName = document.querySelector(".username-input");
const emailUser = document.querySelector(".email-input");
const passwordUser = document.querySelector(".password-input");
const confirmPassword = document.querySelector(".confirm-input");

signup_btn.addEventListener("click", () => {
  fetchSignUp("/signup", {
    username: userName.value,
    email: emailUser.value,
    password: passwordUser.value,
    confirmPassword: confirmPassword.value,
  }).then((data) => {
    if (data.error === true) {
      validationSignup(data.data.errors);
    } else {
      location.href = "/userCandyStore";
    }
  });
});
