// while loop 
let number = 1;

while(number <= 10){
    if(number % 2 == 0){
        console.log(`${number} is even`);
    }else{
        console.log(`${number} is odd`);
    }
    number++;
}

// for loop
console.log("For Loop Example");

let numbers  = [12,28,78,99,16,10,55,75,29,15];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 == 0){
        console.log(`${numbers[i]} is even`);
    }else{
        console.log(`${numbers[i]} is odd`);
    }
}

// another way of writting for loop:
let arrayOfNumbers  = [500,28,78,99,16,10,55,75,29,15];
for(let number of arrayOfNumbers){
    if(number % 2 == 0){
        console.log(`${number} is even`);
    }else{
        console.log(`${number} is odd`);
    }
}
