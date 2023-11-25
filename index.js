const romains = (str) => {
    const map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let result = 0
    let prev = 0
    for(let i = str.length - 1; i>= 0; i--){
        let curr = map[str[i]]
        if(curr >= prev ){
            result += curr
        } else {
            result-= curr
        }
        prev = curr
    }
    return result
}

const number_arabic = (number) => {
    const map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let roman = ''
    for (let i = 0; i< number.length; i++) {
        if (number >= pair[i]) {
            roman += pair[i]
        }else{
            number -= pair[i]
        }
        
    }
    return roman
}

const your_num = ''
const normal_num = romains(your_num)
const result = number_arabic(normal_num)
console.log(`${your_num}  ${normal_num}`)
console.log(`${result}`)
