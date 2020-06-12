const array = [1, 4, 9, 16];

let arrayPop = (array) => {
  let len = array.length-1;
  let output = array[len];
  array.length = len;
  return output;
}

console.log(arrayPop(array))
console.log(array)