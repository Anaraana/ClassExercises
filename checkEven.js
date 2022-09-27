// Write a function that takes an integer as a parameter and console logs if the number is even or odd
// 2  → “Even”
// 3  → “Odd”
// 11 → “Odd”

const check = (num) => {
    if (num %2 ===0){
    console.log (`${num} is a even number`);
    }else {
    console.log (num + ' is a odd number');}

}
check(15)
