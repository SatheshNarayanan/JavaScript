const array = [1, 4, 9, 16];

let arrayPush = (array,...val) => {
  let len = array.length;
  for (var ind = 0; ind<val.length; ind++){
    array[(len+ind)] = val[ind];
  }
  return array
}

console.log(arrayPush(array,'bag'))
