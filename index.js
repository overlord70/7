let inputs = document.querySelectorAll('.word')
let btn = document.querySelector('button')
let number = document.querySelector('.number')
inputs.forEach(inp => {
  inp.onkeyup = () => {
    if(/^[a-z ,.'-]+$/i.test(inp.value) === true){
      inp.style.border = '1px solid gray'
      btn.style.background = '#4200FF'
      btn.style.border = '2px solid #4200FF'
    } else {
      inp.style.border = '2px solid red'
      btn.style.background = 'red'
      btn.style.border = '2px solid red'
    }
  }
})
let important = document.querySelectorAll('.important input')
btn.onclick = () => {
  important.forEach(inp => {
    if (inp.value === '') {
      inp.style.border = '2px solid red'
      btn.style.border = '2px solid red'
      btn.style.background = 'red'
    } else {
      inp.style.border = '1px solid gray'
      btn.style.border = '2px solid #4200FF'
      btn.style.background = '#4200FF'
    }
  })
}
number.onkeyup = () => {
  if(/^9989[012345789][0-9]{7}$/.test(number.value) === true){
    number.style.border = '1px solid gray'
      btn.style.background = '#4200FF'
      btn.style.border = '2px solid #4200FF'
   } else {
    number.style.border = '2px solid red'
      btn.style.background = 'red'
      btn.style.border = '2px solid red'
   }
}