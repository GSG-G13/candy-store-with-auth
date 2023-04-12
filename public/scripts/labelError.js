const createLabelError = (mainDiv, msgError) => {
  const labelError = document.createElement("label");
  mainDiv.textContent = "";
  labelError.style.color = "red";
  labelError.textContent = msgError.message;
  mainDiv.appendChild(labelError);
};
