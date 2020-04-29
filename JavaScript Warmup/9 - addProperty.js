
Write a function called “addProperty”.
Given an object, and a key, “addProperty” sets a new property on the given object with a value of true.
Input:
addProperty(myObj, “myProperty”);
Output:
{myProperty: true}

var a = { }

function addProperty(obj, key){
  obj[key] = true;
}

addProperty(a,'key1')

console.log(a);