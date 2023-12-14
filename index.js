let price_view = document.querySelector('h1')
let memory_btns = document.querySelectorAll('button')
const original_price = 1000
let prev = 0
memory_btns.forEach((btn , idx) => {
  btn.onclick = () => {
    price_view.innerHTML = calculate(btn, original_price)

    memory_btns[prev].classList.remove('active')
    btn.classList.add('active')
    prev = idx
  }
})
function calculate (btn, original_price) {
  let add_price = btn.firstElementChild.innerHTML.split('+')
  add_price = +add_price[add_price.length - 1]
  return(original_price + add_price)
}