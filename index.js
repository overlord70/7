let btn = document.querySelector('button')
let important = document.querySelectorAll('.inputs_imp')
let svgs = document.querySelectorAll('svg')
let correct = document.querySelector('.correct')
let mistake = document.querySelector('.mistake')
btn.onclick = () => {
    important.forEach(item => {
        if(item.value === ''){
            svgs.forEach(svg => {
                svg.style.display = ''
            })
        btn.style.backgroundColor = 'red'
        btn.style.border = '2px solid red'
        item.style.border = '2px solid red'
            mistake.innerHTML++ 
        } else {
            svgs.forEach(svg => {
                svg.style.display = 'none'
            })
        item.style.border = '1px solid black'
        btn.style.backgroundColor = '#4200FF'
        btn.style.border = '#4200FF'
        correct.innerHTML++
    }
})
}