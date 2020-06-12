
let x = [5, 12, 8, 130, 44];

let arrayFindIndex = (val,fn) =>{
  for (var ind = 0; ind<val.length;ind++){
    if (fn(val[ind]))
    {
      return ind;
    }
  }
  return -1;
}

let great = (x) => x>1000

console.log(arrayFindIndex(x,great));
