const fetchFunction = (url) => fetch(url).then((data) => data.json());
const fetchDelete = (url) => fetch(url, { method: 'DELETE' }).then(()=> location.reload());

