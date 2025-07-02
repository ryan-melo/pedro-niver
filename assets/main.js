const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const img = document.querySelector("#img")
const btnReset = document.querySelector("#btnReset")
const windowWidth = window.screen.width

console.log(windowWidth)

function toggle() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function openCookie() {
if (windowWidth > 680) {
  toggle()
} else if (windowWidth < 680) {
  mobile()
  setTimeout(mobile, 1500)

  toggle()
  console.log("tela menor")
}
}

confetti.start()

function mobile() {
  img.classList.toggle("mobile")
}

function position() {
  let position = Math.round(Math.random() * 60)
  return position
}

function abreLink(){
  window.open('https://www.instagram.com/p/DFP-TaENbgD/');
}

img.addEventListener("click", openCookie)
img.addEventListener("click", abreLink)

btnReset.addEventListener("click", toggle)

