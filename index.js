let Hasan = document.querySelector('.Hasan')
let Husen = document.querySelector('.Husen')

Hasan.onclick = () => {
    Husen.style.transition = '0.5s ease'
    Husen.style.borderRadius = "50px"
    Husen.style.background = 'green'
    Husen.style.padding = '15px 15px 15px 15px'
    if(Husen.style.background = 'green'){
        Husen.style.marginLeft = '10px'
    }
}
Husen.onclick = () => {
    Hasan.style.transition = '0.5s ease'
    Hasan.style.borderRadius = "50px"
    Hasan.style.background = 'grey'
    Hasan.style.padding = '15px 15px 15px 15px'
    if(Hasan.style.background = 'grey'){
        Hasan.style.marginRight = '10px'
    }
}