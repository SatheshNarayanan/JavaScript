const arrayFrom = (val,fn) => {
if( typeof val === 'string'){
let array = val.split('');
return array;
}
else if (val instanceof Array){
  let outstring = []
  for (let ind = 0; ind < val.length; ind++)
  {
    let calc = (fn(val[ind]))
    outstring[ind] = (typeof calc != "undefined") ? calc : '';
  }
  return outstring; 
}
else{
  console.log('input must be a string or array')
}
}

let x = [1,2,3]

let addfn = (x) => { return (x + x)}

console.log(arrayFrom([1, 2, 3],addfn));