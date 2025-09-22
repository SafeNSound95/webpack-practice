import App from "./App.js"

const hello = name => {
  console.log(`hello ${name}`)
}

hello('him')

const div = document.querySelector('#root')
const p = document.createElement("p")
p.textContent = App()
div.appendChild(p)