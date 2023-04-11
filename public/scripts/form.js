fetchFunction('/categories')
.then((res) =>createListWithId('category',res));

fetchFunction('/flavors')
.then((res) =>createListWithId('flavor',res));