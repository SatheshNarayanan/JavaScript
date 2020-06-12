const array = ['a', 'b', 'c','a', 'b', 'c'];

let arrayLastindex = (array,element) => {
  for (var ind= (array.length -1); ind>=0; ind--){
    if(array[ind] === element)
    return ind;
  }
  return -1;
}

console.log(arrayLastindex(array,'b'))