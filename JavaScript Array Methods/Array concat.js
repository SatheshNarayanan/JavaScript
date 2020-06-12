let x = [1,2,3]

arrayConcat = (...val) => {
let array = []
for (var ind = 0; ind < val.length; ind++){
 array = [...array,...val[ind]];
}
  return array;
}
console.log(arrayConcat([1,2,3,4],[1,2,3,4],'A'));
