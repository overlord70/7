let SSD = document.querySelector('#SSD')
let TB = document.querySelector('#TB')
let mac_img = document.querySelector('.mac_img')
let btn_white = document.querySelector('.btn_white')
let btn_grey = document.querySelector('.btn_grey')
let white = document.querySelector('.white')
let h3 = document.querySelector('.h3')
let btns = document.querySelectorAll('.one')
console.log(white, h3, btns);
btn_grey.onclick = () => {
  mac_img.setAttribute('src', './img/mbp14-silver-select-202110 1.jpg')
  white.innerHTML = 'Space Gray'
  btn_grey.style.background = '#0071E3'
    btn_grey.style.color = 'white'
    btn_white.style.background = '#CFE7FF'
    btn_white.style.color = 'gray'
}
let GB_SSD = document.querySelector('#GB_SSD')
btn_white.onclick = () => {
    mac_img.setAttribute('src', './img/mbp14-spacegray-select-202110 1.jpg')
    white.innerHTML = 'White'
    btn_grey.style.background = '#CFE7FF'
    btn_grey.style.color = 'gray'
    btn_white.style.background = '#0071E3'
    btn_white.style.color = 'white'
}
TB.onclick = () => {
  h3.innerHTML = '$2,199'
  TB.style.border = '1px solid blue'
  GB_SSD.style.border= '1px solid skyblue'
}
SSD.onclick = () => {
  h3.innerHTML = '$2,599'
  DDS.style.border = '1px solid skyblue'
  SSD.style.border = '1px solid blue'
  GB_SSD.style.border= '1px solid skyblue'
}
let DDS = document.querySelector('#DDS')
DDS.onclick = () => {
  h3.innerHTML = '$2,599'
  DDS.style.border = '1px solid blue'
  SSD.style.border = '1px solid skyblue'
  GB_SSD.style.border= '1px solid skyblue'
}