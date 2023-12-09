let p = document.querySelector('p')

let teg_1 = document.querySelector('.teg_1')
teg_1.onclick = () => {
    if (p.innerHTML < 10) {
        p.innerHTML++
    }
}
let teg_4 = document.querySelector('.teg_4')
teg_4.onclick = () => {
    if (p.innerHTML > 0) {
        p.innerHTML--
    }
}
let teg_2 = document.querySelector('.teg_2')
teg_2.onclick = () => {
    p.innerHTML = 0
}
let teg_3 = document.querySelector('.teg_3')
teg_3.onclick = () => {
    let numbers = [1,2,3,4,5,6,7,8,9,10]
    p.innerHTML = Math.round(Math.random() * numbers.length)   
}
