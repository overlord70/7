let right = document.querySelector('.right')
let img = document.querySelector('.photos_img')
let btr = document.querySelector('.btr')
right.onclick = () => {
  img.setAttribute('src', './img/iphone-15-pro-model-unselect-gallery-2-202309_GEO_US.jpg')
  btr.classList.add('left')
  right.innerHTML = '<'
  right.onclick = () => {
    img.setAttribute('src', './img/iphone-15-pro-model-unselect-gallery-1-202309.jpg')
    btr.classList.remove('left')
    right.innerHTML = '>' 
    
  }
}
let color_choose_1 = document.querySelector('.color_choose_1')
let color_choose_2 = document.querySelector('.color_choose_2')
let color_choose_3 = document.querySelector('.color_choose_3')
let color_choose_4 = document.querySelector('.color_choose_4')
color_choose_1.onclick = () => {
img.setAttribute('src', './img/iphone_1.jpg')
img.classList.add('active')
}
color_choose_2.onclick = () => {
  img.setAttribute('src', './img/iphone_blue_5.jpg')
  img.classList.add('active')
  }
  color_choose_3.onclick = () => {
    img.setAttribute('src', './img/iphone_black_13.jpg')
    img.classList.add('active')
    }
    color_choose_4.onclick = () => {
      img.setAttribute('src', './img/iphone_white_9.jpg')
      img.classList.add('active')
      }
    