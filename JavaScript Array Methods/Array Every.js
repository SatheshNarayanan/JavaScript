
arrayEvery = (val,fn) => {
for (var ind = 0; ind < val.length; ind++){
 if(!(fn(val[ind]))){
   return false
 }
}
return true;
}

let addfn = (x) => { return x > 0 };
console.log(arrayEvery([1,2,3,4],addfn));
