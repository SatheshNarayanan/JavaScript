
let array = [1,2,3,4,5]

let arrayForeach = (array,fn) => {
  let output = []
  for (var ind = 0; ind<array.length; ind++){
    let calc = fn(array[ind])
     output = [...output,calc]
  }
  return output;
}

console.log(arrayForeach(array, x => x+2))
