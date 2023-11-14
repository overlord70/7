let people = [
    {
        name: "bobur",
        age: 43,
        isMarried: false,
        wifes: ['kamila', 'safir', 'allayor']
    },
    {
        name: "ismail",
        age: 12,
        isMarried: true,
        wifes: ['nikita', 'malika']
    },
    {
        name: "allayor",
        age: 14,
        isMarried: true,
        wifes: ['denis', 'dima', 'dimon', 'xbegim']
    },
    {
        name: "sarodr ml",
        age: 18,
        isMarried: false,
        wifes: ['safiya']
    },
    {
        name:'Tangir',
        age: 15,
        isMarried: true,
        wifes: ['Marina', 'Safiya', 'Malika', 'Sarvara', 'Alisa']
    },
    {
        name: 'Sardor st',
        age: 17,
        isMarried: false,
        wifes:['Anisa']
    }
]
let guilties = []
let normal = []
for(let i = 0; i < people.length; i++){
    if(people[i].age < 18 && people[i].wifes.length > 1){
        guilties.push(people[i].name , 
                      people[i].age, 
                      people[i].wifes, 
                      people[i].isMarried)
    } else if (people[i].age >= 18 && people[i].wifes.length === 1){
        normal.push(people[i].name , 
                    people[i].age,
                    people[i].wifes,
                    people[i].isMarried)
    }
}
console.table(guilties)
console.table(normal)

//document.write (guilties ,normal)