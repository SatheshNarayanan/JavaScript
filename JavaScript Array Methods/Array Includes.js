
let array = [1,2,3,4,5]

let arrayIncludes = (array,input) => {
  for (var ind = 0; ind< array.length; ind++){
    if(array[ind] === input){
      return true;
    }
  }
  return false;
}

console.log(arrayIncludes(array,8))

