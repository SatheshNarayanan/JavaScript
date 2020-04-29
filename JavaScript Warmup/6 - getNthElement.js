
Write a function called “getNthElement”.
Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
Input:
getNthElement([1, 3, 5], 1);
Output:
3

a = [1,2,3,4,5,6,7,8,9]

function getNthElement(a,b){
  console.log(a[b]);
}

getNthElement(a, 0);