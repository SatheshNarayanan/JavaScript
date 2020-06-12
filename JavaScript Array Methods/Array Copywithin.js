

arrayCopywithin = (val,paste,copystart,copyend=val.length) => {

for (var ind = copystart; ind < copyend; ind++){
 val[paste] = val[ind];
 paste++;
}
return(val)
}
console.log(arrayCopywithin([1,2,3,4],0,1));
