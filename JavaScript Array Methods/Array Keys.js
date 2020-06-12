const array = ['a', 'b', 'c'];

let arrayKeys = (array) => {
  let output = []
  for (var ind= 0; ind< array.length; ind++){
    output = [...output,ind]
  }
  return output
}

console.log(arrayKeys(array))