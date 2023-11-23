let num = Math.random()
function create_id (random_num){ 
    let arr = prompt('Your name')
     alert( `${arr.charAt().toUpperCase()}` + '-'+ random_num.toString().slice(5,10))
    
    }
create_id(num)

// 2 
function sortUsingForOf(inputArray) {
    const sortedArray = [];
  
    for (const element of inputArray) {
      if (sortedArray.length === 0) {
        sortedArray.push(element);
      } else {
        let inserted = false;
        for (let i = 0; i < sortedArray.length; i++) {
          if (element < sortedArray[i]) {
            sortedArray.splice(i, 0, element);
            inserted = true;
            break;
          }
        }
        if (!inserted) {
          sortedArray.push(element);
        }
      }
    }
  
    return sortedArray;
  }
  const unsortedArray = [3, 1, 5, 2, 4];
  const sortedResult = sortUsingForOf(unsortedArray);
  console.log(sortedResult); 
  