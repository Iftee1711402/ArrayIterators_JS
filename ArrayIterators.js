/*
js array iterators 
array iterator methods are: 
	- .forEach()
	- .map()
	- .filter()
	- .reduce()
*/

// .forEach() method: it just iterates through a given array
const array = [5, 10, 15, 20];

array.forEach((num) => {
	console.log(num); //  logs the individual items in the conosole
});

var colors = ['red', 'orange', 'yellow', 'green'];
colors.forEach(function(item){
	console.log(item); // logs the individual items in the conosole
});

//the above forEach can be called using arrow functions (ES6 speicification)
var colors1 = ['red', 'orange', 'yellow', 'green'];
colors1.forEach((item) => {
	console.log(item); // logs the individual items in the conosole
});

//-----------------------------------------------------------//
//-----------------------------------------------------------//

// .map() method: it iterates through  a given array and returns it
const array1 = [4, 8, 12, 16];

const mappedArray = array1.map((num) => {
	return num * 2;
});
console.log(array1);
console.log(mappedArray);

//-----------------------------------------------------------//
//-----------------------------------------------------------//

// .fiter() method: as the name suggests, it filters a 
// part of a given array for a given condition and returns 
// a new array, like .map(), and unlike .forEach()

const array2 = [3, 6, 9, 12];

const filteredArray = array2.filter((num) => {
	return num > 3;
});

console.log(filteredArray);

//-----------------------------------------------------------//
//-----------------------------------------------------------//

// .reduce() method: the most ajaira of all array iterator methods
// but still might come in handy in some unknown situations
// returns a value instead of an array
// it has two parameters, (accumulator, num) as the first parameter

const array3 = [10, 20, 30, 40];

const reducedArray = array3.reduce( (accumulator, num) => {
	return accumulator + num;
}, 5); // the 5 here is the second parameter

console.log(reducedArray);

//-----------------------------------------------------------//
//-----------------------------------------------------------//