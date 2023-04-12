const createLabelError = (mainDiv, msgError) => {
  const labelError = document.createElement("label");
  mainDiv.textContent = "";
  labelError.style.color = "red";
  labelError.textContent = msgError.message;
  mainDiv.appendChild(labelError);
};

const validationSignup = (data) => {
  const usernameContent = document.querySelector(".usernameContent");
  const emailContent = document.querySelector(".emailContent");
  const passwordContent = document.querySelector(".passwordContent");
  const confirmPasswordContent = document.querySelector(
    ".confirmPasswordContent"
  );

  usernameContent.textContent = "";
  emailContent.textContent = "";
  passwordContent.textContent = "";
  confirmPasswordContent.textContent = "";

  data.forEach((msgError) => {
    if (msgError.path[0] === "username") {
      createLabelError(usernameContent, msgError);
    }

    if (msgError.path[0] === "email") {
      createLabelError(emailContent, msgError);
    }

    if (msgError.path[0] === "password") {
      createLabelError(passwordContent, msgError);
    }
    if (msgError.path[0] === "confirmPassword") {
      createLabelError(confirmPasswordContent, msgError);
    }
  });
};
