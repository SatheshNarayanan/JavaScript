
arraySome = (val,fn) => {
for (var ind = 0; ind < val.length; ind++){
 if((fn(val[ind]))){
   return true
 }
}
return false;
}

let addfn = (x) => { return x > 3 };
console.log(arraySome([1,2,3,4],addfn));
