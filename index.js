//1
let your_age = prompt('How old are you?')
function ask_age (age){
    if(age >= 18){
        alert('Welcome')
    }else if(age === ''){
        alert('Stupid')
    } else{
        alert('Get out of here')
    }
}
ask_age (your_age)
//2
function find_max_name(name, name_second, name_third){
    if(name.length > name_second.length && name.length >name_third.length ){
        alert('The biggest one ' + name)
    } else if(name_second.length > name.length && name_second.length > name_third.length){
        alert('The biggest one ' + name_second)
    } else if(name_third.length > name_second.length && name_third.length > name.length){
        alert('The biggest one ' + name_third)
    }
}
find_max_name('Alex', 'George', 'Michael')
//3
let overal = +prompt('How many things did you send?')
let ask = confirm('Is it procent?')
if(ask === false){
    let remainder = +prompt('How many things were broken?')
    function find_x (a,b){
    let overal_procent = 100
    let x = a * overal_procent / b
    alert(overal_procent + '%' + ' = ' + `${b}` )
    alert(`${x}` + '%' + ' = ' + `${a}`)
    }
    find_x(remainder, overal)
} else{
    let remainder_procent = +prompt('How many procent of them was broken?')
    function find_y (c,d){
        let overal_procent = 100
        let y = c * d / overal_procent
        alert( overal_procent + '%' + ' = ' + `${c}`)
            alert(`${d}` + ' %' + ' = ' + `${y}`)
    }
    find_y(overal, remainder_procent)
}
