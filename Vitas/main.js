

const inputText = document.querySelector('.text')
const btn = document.querySelector('button')
const li = document.querySelector('li')
let s = []


btn.addEventListener('click', () => {

    s.push(inputText.value)
    inputText.value = ''
    li.innerHTML = s
})