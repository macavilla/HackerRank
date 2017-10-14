/*A left rotation operation en an array of size N 
shifts each of the array's elements 1 unit to
the left
Given an array of n integers, and a number d
perform d left rotations on the array.
Then, print the updated array in a single line.
*/


var parameters = process.argv;
var n = parameters [2]; // size of the array
var d = parameters [3]; // number of rotations
var array = [];
var swap;


for (var i = 0; i < n; i++) {
	array[i] = i+1;
}

console.log("Original array: ", array);

console.log("----------------------------")

/* 4. Finally, I determine how many times to execute the complete rotation*/
for (var k = 0; k < d; k++) {
	
	/* 1. To make a complete rotation: I need to send the array's first element 
	to the last	position so I save it in swap*/
	swap = array[0];
	/* 2. Now I need to move all the other elements 1 position to the left */
	for (var j = 1; j < array.length; j++) {
		array[j-1] = array[j];
		console.log("Work in progress",array);
	}
	/* 3. Now, I put the array's first element (saved in swap) in 
	the last position*/
	array[array.length-1] = swap;
	console.log((k+1) + "° rotation: " + array);
}

