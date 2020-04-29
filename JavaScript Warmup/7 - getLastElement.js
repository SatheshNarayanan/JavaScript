
Write a function called “getLastElement”.
Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘undefined’.
Input:
getLastElement([1, 2, 3, 4]);
Output:
4

a = [1,2,3,4,5,6,7,8,9]

function getNthElement(a){
  x = a.length-1
  console.log(a[x]);
}

getNthElement(a);
