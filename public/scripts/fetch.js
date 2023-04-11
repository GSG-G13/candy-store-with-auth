const fetchFunction = (url) => fetch(url).then((data) => data.json());
const fetchDelete = (url) =>
  fetch(url, { method: "DELETE" }).then(() => location.reload());

const fetchEdit = (url, data) =>
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .then((err) => {
      if (err.error === true) {
        validationDOM(err.data.errors);
      } else {
        location.href = "/";
      }
    })
    .catch((error) => console.log(error));

const fetchAdd = (url, data) =>
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .then((err) => {
      if (err.error === true) {
        validationDOM(err.data.errors);
      } else {
        location.href = "/";
      }
    })
    .catch((error) => console.log(error));
