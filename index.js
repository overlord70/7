/*let arr = [
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },

    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
]

let categories = [
    {
        course: ' SMM',
        count: 0,
        arr_categories:[]
    },
    {
        course: 'PROGRAMMING',
        count: 0,
        arr_categories:[],
    },
    {
        course: '     3DSMAX',
        count: 0,
        arr_categories:[]
    },
    {
        course: ' DIZAYN',
        count: 0,
        arr_categories:[]
    },
    {       
        course: '   BACKEND',
        count: 0,
        arr_categories:[]
    },
]
for(let i = 0; i < arr.length; i++){
   for(let k = 0; k < categories.length; k++){
    if(arr[i].info.faculity.toUpperCase().trim() === categories[k].course.toUpperCase().trim()){
        categories[k].count++
        categories[k].arr_categories.push(arr[i].name)
    }
   }
   
}*/

let companies = [
    {
        id: Math.random(),
        name: "wepro",
        tax: 12,
        budget: 10000,
        expensesPerYear: [4000, 2000, 3000] 
    },
    {
        id: Math.random(),
        name: 'Allayor',
        tax: 12,
        budget: 200,
        expensesPerYear: [150, 300, 700]
    },
    {
        id: Math.random(),
        name: "Daler-Xrust",
        tax: 10,
        budget: 50000,
        expensesPerYear: [12000, 20000, 5000]
    },
    {
        id: Math.random(),
        name: 'Luchshiy Productoviy',
        tax: 20,
        budget: 23000,
        expensesPerYear: [2000, 1000, 5000]
    },
    {
        id: Math.random(),
        name: "dilrukh salon",
        tax: 4,
        budget: 32000,
        expensesPerYear: [12000, 10000, 10000]
    },
    {
        id: Math.random(),
        name: "Necromantiya",
        tax: 10,
        budget: 30000,
        expensesPerYear: [1200,3444,4666]
    },
    {
        id:Math.random(),
        name:'Artyomida.uz',
        tax:15,
        budget:100000,
        expensesPerYear:[10000,3000,90000]
    },
    {
        id: Math.random(),
        name: "bmw",
        tax: 13, 
        budget: 13000, 
        expensesPerYear: [3000, 4000, 1000]
    },
    {
        id: Math.random(),
        name: "dizayner",
        tax: 12,
        budget: 20000,
        expensesPerYear: [1000, 100, 200]
    },
    {
        id:Math.random(),
        name: 'Amerika_cherez_mexika',
        tax: 0,
        budget: 15000,
        expensesPerYear: [100,4000]
    },
    {
        id: Math.random(),
        name: 'Gradus MMM',
        tax: 12,
        budget: 250000,
        expensesPerYear: [20000, 50000, 15000]
    },
    {
        id:Math.random(),
        name:"Tangir Company",
        tax: 100,
        budget: 1000000,
        expensesPerYear: [10000,12000,20000]
    },
    {
        id: Math.random(),
        name: "film_for_adults",
        tax: 75,
        budget: 50000,
        expensesPerYear: [15000, 10000, 5000]
    }
]

let minus = []
let plus = []

for(let item of companies){
    item.new_key = 0
    item.id = Math.round(item.id)
    for(let num of item.expensesPerYear){
       item.new_key += num / 12
    }
    let tax_sum = item.tax * (item.budget / 12) /100
    item.total = Math.round((item.budget / 12) - (item.new_key + tax_sum))
   if(item.total > 0 ){
    plus.push(item)
   }else{
    minus.push(item)
   }
}
console.log(companies, minus, plus);