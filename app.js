import names from './product_names.js'

const namesTable = document.querySelector('.product-names')
const nameItem = document.querySelector('.product-names__item')
const toast = document.querySelector('.notification')

const sortedNames = names.sort(
  (a, b) => a.name_ru.toLowerCase().charAt[0] > b.name_ru.toLowerCase().charAt[0] ? 1 : -1
)

for (const productName of sortedNames) {
  const { name_ru, name_en } = productName
  const el = nameItem.cloneNode({ deep: true })
  el.querySelector('.product-names__name-ru span').textContent = name_ru
  el.querySelector('.product-names__name-en span').textContent = name_en.toLowerCase().replace(/ /g, '-')

  namesTable.append(el)
}
// Убирает изначальный элемент с которого делались клоны
namesTable.removeChild(namesTable.querySelector('.product-names__item'))

const showNotification = () => {
  toast.classList.add('shown')
  const hide = () => toast.classList.remove('shown')
  setTimeout(hide, 700)
}

namesTable.addEventListener('click', (evt) => {
  const target = evt.target

  if (target.classList.contains('copy-btn')) {
    navigator.clipboard.writeText(target.previousElementSibling.textContent)
    showNotification()
  }
})

const preparedNames = namesTable.querySelectorAll('.product-names__item')

const search = (name) => {
  preparedNames.forEach(n => {
    const nameRu = n.querySelector('.name-ru').textContent
    const nameEn = n.querySelector('.name-en').textContent

    if(nameRu.toLowerCase().includes(name.toLowerCase()) || nameEn.toLowerCase().includes(name.toLowerCase())) {
      n.classList.remove('hidden')
    } else {
      n.classList.add('hidden')
    }
  })
}

const searchInput = document.querySelector('.search-input')

searchInput.addEventListener('input', evt => {
  search(evt.target.value)
})

searchInput.addEventListener('paste', (evt) => {
  searchInput.value = ''
  search(evt.target.value)
})