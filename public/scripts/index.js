const add_button = document.querySelector('.addCandyButton')
const addCategoryButton = document.querySelector('.addCategoryButton')
const addFlavorButton = document.querySelector('.addFlavorButton')


fetchFunction('/candies').then((res) => createCard(res))

fetchFunction('/categories').then((res) => createList('category', res))

fetchFunction('/flavors').then((res) => createList('flavor', res))

add_button.addEventListener('click', () => {
  window.location.href = '/addCandyForm'
})
addCategoryButton.addEventListener('click', () => {
  window.location.href = '/addCategory'
})
addFlavorButton.addEventListener('click', () => {
  window.location.href = '/addFlavor'
})

category_id.addEventListener('change', () => {
  flavor_id.value = ''
  if (!category_id.value) {
    fetchFunction('/candies').then((res) => createCard(res))
  }
  fetchFunction(`/oneCat/${category_id.value}`).then((res) => createCard(res))
})

flavor_id.addEventListener('change', () => {
  category_id.value = ''
  if (!flavor_id.value) {
    fetchFunction('/candies').then((res) => createCard(res))
  }
  fetchFunction(`/oneFlav/${flavor_id.value}`).then((res) => createCard(res))
})
