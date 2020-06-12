
let x = [5, 12, 8, 130, 44];

let arrayFind = (val,fn) =>{
  for (var ind = 0; ind<val.length;ind++){
    if (fn(val[ind]))
    {
      return val[ind];
    }
  }
}

let great = (x) => x>10

console.log(arrayFind(x,great));
