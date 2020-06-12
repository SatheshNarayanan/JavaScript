
let x = [1,2,3]

let arrayFilter = (val,fn) =>{
  let array = []
  for (var ind = 0; ind<val.length;ind++){
    if (fn(val[ind]))
    {
      array = [...array,val[ind]]
    }
  }
  return array;
}

console.log(arrayFilter(x,x=> x>1));

