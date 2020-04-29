Write a function called “areBothOdd”.
Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
Input:
areBothOdd(1, 3);
Output:
true


function isOdd(num){
  if (num%2 == 1)
  return true
  else
  return false;
}

function twoOdds(a,b)
{
  if (isOdd(a))
   console.log(isOdd(b));
  else
  console.log(false);
}

twoOdds(5,5);