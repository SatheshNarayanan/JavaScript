
Write a function called “removeProperty”.
Given an object and a key, “removeProperty” removes the given key from the given object.
Input:
removeProperty(obj, “name”);
Output:
undefined

var a = { 
  key1 : true,
  key2 : true
}

function removeProperty(obj, key){
 delete obj[key];
}

removeProperty(a,'key1')
console.log(a);
removeProperty(a,'key2')