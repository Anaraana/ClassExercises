// sort example
const numbers = [10, -1, -4, 8, -29, 21]
const sortedAscending = numbers.sort((num1, num2) =>{
    console.log(num1, num2)
    if (num1 > num2) return 1
    else return -1
})
console.log(sortedAscending)