
let array = [1,2,3,4,5]

let arrayIndexOf = (array,input) => {
  for (var ind = 0; ind< array.length; ind++){
    if(array[ind] === input){
      return ind;
    }
  }
  return -1;
}

console.log(arrayIndexOf(array,4))