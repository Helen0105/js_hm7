console.log("1");


let num = [1, 2, 3];
num[1] = 10;
console.log(num);

console.log("2");

let arr = ['Olena', 'Valera', 'Helen']
arr[3] = 'Anna';
console.log(arr);



  
console.log("3");
let number = [1, 5, 10, 15, 20];
let sum = 0;
for(let i = 0; i < number.length; i += 1){
    sum += number[i];
}
console.log(sum);




console.log("4");
let numbers = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0; i < numbers.length; i += 1){
    console.log(numbers[i]);
}


console.log("5");
const strings = ["Кіт", "Червоний", "Дерево", "Хліб", "Чай"];
for(let i = 0; i < strings.length; i += 1){
    if (strings[i].length > 5) {
        continue;
    }
    console.log(strings[i]);
}



console.log("6");
const addNumbers = [12,52,4632,448,1,1.1,5.022,20,122,10];
let result = 0;
for (let i = 0; i < addNumbers.length; i+= 1) {
    result += addNumbers[i];
}
console.log(result);


console.log("7");
const someNumbers = [20,11,10,53,13,6,8,3,1,40];
for(let i = 0; i < someNumbers.length; i += 1){
    if (someNumbers[i] % 2 !== 0) {
        continue;
    }
    console.log(someNumbers[i]);
    
}