// let right = document.querySelector('.right')
// let img = document.querySelector('.photos_img')
// let btr = document.querySelector('.btr')
// let photos = document.querySelector('.photos')
// if(right.innerText === '>'){
//   btr.onclick = () => {
//     img.setAttribute('src', './img/iphone-15-pro-model-unselect-gallery-2-202309_GEO_US.jpg')
//     right.innerHTML = '<'
//     btr.classList.add('left')
//     if(right.innerText === '<'){
//       btr.onclick = () => {
//         img.setAttribute('src','./img/iphone-15-pro-model-unselect-gallery-1-202309.jpg')
//         right.innerHTML = '>'
//         btr.classList.remove('left') 
//     }
//     }
//   }
// }
// let color_choose_1 = document.querySelector('.color_choose_1')
// let color_choose_2 = document.querySelector('.color_choose_2')
// let color_choose_3 = document.querySelector('.color_choose_3')
// let color_choose_4 = document.querySelector('.color_choose_4')
// color_choose_1.onclick = () => {
// img.setAttribute('src', './img/iphone_1.jpg')
// img.classList.add('active')
// }
// color_choose_2.onclick = () => {
//   img.setAttribute('src', './img/iphone_blue_5.jpg')
//   img.classList.add('active')
//   }
//   color_choose_3.onclick = () => {
//     img.setAttribute('src', './img/iphone_black_13.jpg')
//     img.classList.add('active')
//     }
//     color_choose_4.onclick = () => {
//       img.setAttribute('src', './img/iphone_white_9.jpg')
//       img.classList.add('active')
//     }
//     let h3 = document.querySelector('.h3')
//     color_choose_1.onmouseenter = () => {
//       h3.innerHTML = 'Color - natural'
//     }
//     color_choose_1.onmouseleave = () => {
//       h3.innerHTML = 'Color'
//     }
//     color_choose_2.onmouseenter = () => {
//       h3.innerHTML = 'Color - blue titan'
//     }
//     color_choose_2.onmouseleave = () => {
//       h3.innerHTML = 'Color'
//     }
//     color_choose_3.onmouseenter = () => {
//       h3.innerHTML = 'Color - black titan'
//     }
//     color_choose_3.onmouseleave = () => {
//       h3.innerHTML = 'Color'
//     }
//     color_choose_4.onmouseenter = () => {
//       h3.innerHTML = 'Color - white titan'
//       h3.style.transition = '5s ease'
//     }
//     color_choose_4.onmouseleave = () => {
//       h3.innerHTML = 'Color'
//     }
    let none = document.querySelector('.none')
    let block = document.querySelector('.block')
    let down = document.querySelector('.down')
    
    
      block.onclick = () => {
        if(down.innerText === '⬇'){
          none.style.display = 'block'
           down.innerHTML = '⬆'
        } else {
          none.style.display = 'none'
           down.innerHTML = '⬇'
        }
        }
let p = document.querySelector('.click_p')
let nav = document.querySelector('.nav')
let up_one = document.querySelector('.up_one')
p.onclick = () => {
  if( up_one.innerText === '⬆'){
    up_one.innerHTML = '⬇'
    nav.style.display = 'none'
  } else {
    up_one.innerHTML = '⬆'
    nav.style.display = 'block'
  }
}
     let ssilka = document.querySelector('.ssilka')
     let modal = document.querySelector('.modal')
     let back = document.querySelector('.back')
     let x = document.querySelector('.x')
    ssilka.onclick = () => {
        modal.style.display = 'block'
    }
    x.onclick = () => {
      modal.style.display = 'none'
    }
    