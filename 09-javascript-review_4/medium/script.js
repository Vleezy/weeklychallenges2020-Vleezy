
//Array
var array = [0,1,2,3,4,5,6,7];
console.log(`Original Array:`, array);

//Splicing to Change Array
var remove = array.splice(0,3, 4,5,6,7);
console.log(`Splice: ${remove}`);
var remove2 = array.splice(4,5, 0,1,2);
console.log(`Splice: ${remove2}`);
console.log(`New Array:`,array);

//Var = IndexOf()
var index = array.indexOf(3);
console.log(`Index of 3: ${index}`);

//Console indexOf()
console.log(`Index Of 7:`, array.indexOf(7));

//function
function searchIndexOf(array){
    return array.indexOf();
}

//IndexOF
console.log(array.indexOf(3));

console.log(array.indexOf(4));

//for loop
var i;
for (i = 0; i < array.length; i++) {
  array.indexOf(7);
}

//test
var i;
for (i of array) {
  array.indexOf(i);
}
console.log(array.indexOf(5));