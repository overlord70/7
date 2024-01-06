let inps = document.querySelectorAll('input')
let btn = document.querySelector('button')
let number = document.querySelector('.number')
const patterns = {
  name: /^[a-z ,.'-]+$/i,
  surname: /^[a-z ,.'-]+$/i,
  phone_number: /^9989[012345789][0-9]{7}$/,
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  age:/^\S[0-9]{0,3}$/
}
inps.forEach(inp => {
  inp.onkeyup = () => {
      let reg = patterns[inp.name]
      if(reg.test(inp.value)) {
          inp.parentElement.classList.remove('error-field')
      } else {
          inp.parentElement.classList.add('error-field')
      }

  }
})