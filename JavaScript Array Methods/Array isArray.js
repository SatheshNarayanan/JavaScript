let x = [1,2,3]

isArray = (val) => {
  if(val instanceof Array)
  return true;
  else
  return false;
}
console.log(isArray(x));