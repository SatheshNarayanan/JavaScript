
Write a function called “getProperty”.
Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.
Input:
var obj = {
key: “value”
};
Output:
value

var obj = {
key: "value"
};

function getProperty(a,b){
  console.log(a[b])
}

getProperty(obj,'a');