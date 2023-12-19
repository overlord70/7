let temperature = document.querySelector('#temperature')
let one = document.querySelector('#one')
let two = document.querySelector('#two')
let temp = +temperature.innerHTML.slice(0,2)
let air_conditioner = document.querySelector('#air_conditioner')
one.onclick = () => {
    temp++ 
    if(temp >= 15) {
        air_conditioner.innerHTML = 'Кондиционер'
    }
    temperature.innerHTML = temp + '°'
}
two.onclick = () => {
    temp--
    if(temp < 15) {
    air_conditioner.innerHTML = 'Печка'
    } 
    temperature.innerHTML = temp + '°'
}

let three = document.querySelector('#three')
let four = document.querySelector('#four')
let hm = document.querySelector('#hm')
let p = +hm.innerHTML.slice(0,2)  
let supply = document.querySelector('#supply')
let t = +supply.innerHTML.slice(0,3)
three.onclick = () => {
 if(p < 80){
     p += 5 
     t -= 10
     supply.innerHTML = t + 'км'
 } else {
    p = 80
 }
 hm.innerHTML = p + ' км/ч'
}
four.onclick = () => {
    if(p > 20){
        p -= 5
        t += 10
        supply.innerHTML = t + 'км'
    } else {
        p = 20
    }
    hm.innerHTML = p + ' км/ч'
   }
let imgs = document.querySelectorAll('.wheel')
let five = document.querySelector('#five')
let nineteen = document.querySelector('#nineteen')
let six = document.querySelector('#six')
five.onclick = () => {
    nineteen.innerHTML = 21
    imgs.forEach(img => {
        img.setAttribute('src', './img/cold-removebg-preview.png')
    })
}
six.onclick = () => {
    nineteen.innerHTML = 19
    imgs.forEach(img => {
        img.setAttribute('src', './img/hot-removebg-preview.png')
    })
}
let checked = document.querySelector('#checked')
let section = document.querySelector('.Tesla')
let section_2 = document.querySelector('.Tesla_2')
let click = document.querySelector('#click')
let img_salon = document.querySelector('.img_salon')
checked.onclick = () => {
  section.style.display = 'none'
  section_2.style.display = 'block'
}
click.onclick = () => {
    section.style.display = 'block'
    section_2.style.display = 'none'
}
let black = document.querySelector('.black')
let colour = document.querySelector('.colour')
let white = document.querySelector('.white')
white.onclick = () => {
    img_salon.setAttribute('src', './img/image 9.png')
    img_salon.style.width = '500%'
    img_salon.classList.add('active')
}
black.onclick = () => {
    img_salon.setAttribute('src', './img/image 1.png')
    img_salon.style.width = '500%'
    img_salon.classList.add('active')
}
colour.onclick = () => {
    img_salon.setAttribute('src', './img/image 8 (1).png')
    img_salon.style.width = '500%'
    img_salon.classList.add('active')
}
let tiggle = document.querySelector('#tiggle')
tiggle.onclick = () => {
   if(tiggle.innerHTML = tiggle.checked){
    t -= 20
    supply.innerHTML = t + 'км'
   } else {
    t += 20
    supply.innerHTML = t + 'км'
   }
}