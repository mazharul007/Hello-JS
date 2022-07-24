// declare Array, array length and array index

var arrayOfNumbers = [18,29,88,100,98,67,35];
console.log(arrayOfNumbers.length);
console.log(arrayOfNumbers.indexOf(35));
console.log(arrayOfNumbers[0]);
console.log(arrayOfNumbers[arrayOfNumbers.length -1]); // to get the last elemnt of the array we use (arrayName.length-1) as a index of an array
console.log(arrayOfNumbers.slice(-1)); // though slice method we also can get the last element from an array (it wont modify the original array)
console.log(arrayOfNumbers.pop()); 
//thorugh pop method we can also get the last element of an array. (but it will modify the original array by removing the last element from an array)
console.log(arrayOfNumbers);
/**
 * Special Notes:
 Output:
  array length property: 13.798ms
  array slice method: 8.839ms
  array pop method: 0.138ms
  the pop() method is fastest. You can use it if you are fine with modifying the array. If you don't want to change the array, the slice() method can be used.
*/
arrayOfNumbers[arrayOfNumbers.length -1] = 35;
console.log(arrayOfNumbers);

// Add or remove elements using push & pop method from last 

var arrayOfSkils = ['node JS', 'angular', 'react', 'express js', "D3 js"];
arrayOfSkils.push('next js'); // add the element in last index and modify the original array
console.log(arrayOfSkils);
arrayOfSkils.pop(); // remove last element from an array and modify the original array too
console.log(arrayOfSkils);

// Add or remove elements using shift & unshift method from begining 

arrayOfSkils.shift(); // remove from begining and modify the actual array
console.log(arrayOfSkils);
arrayOfSkils.unshift('angular 12'); // Add in  begining and modify the actual array
console.log(arrayOfSkils); 















