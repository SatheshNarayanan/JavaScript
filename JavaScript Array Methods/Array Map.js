const array = [1, 4, 9, 16];

let arrayMap = (array,fn) => {
  let output = []
  for (var ind= 0; ind<array.length; ind++){
    output = [...output,fn(array[ind])]
  }
  return output;
}

console.log(arrayMap(array,x => x * 2))