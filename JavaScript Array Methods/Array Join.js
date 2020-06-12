const elements = [1,2,3];

let arrayJoin = (array,element) => {
  let str = ''
  if (typeof element == "undefined"){
    element = ','
  }
 for (var ind = 0; ind< array.length; ind++){
   if(str === '')
   str = array[ind] + element;
   else if ( ind == (array.length - 1))
   str = str + array[ind]
   else
   str = str + array[ind] + element
 }
 return str
}

console.log(arrayJoin(elements))