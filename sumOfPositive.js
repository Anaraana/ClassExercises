// Write a function that finds the sum of positive numbers in an array
//    positiveSum([1, 2, 3.1, 4, 5]) → 15.1
//    positiveSum([-2, 3.2, 4, 1, -5, -2, 83]) -> 91.2

const positiveSum = (n1) =>{
    let sum=0
    for (let i=0; i<n1.length; i++){
        if(n1[i]>0)
        sum= sum+n1[i];
    }
    return sum
}
console.log(positiveSum([2,3,-3, 1.2]))
console.log(positiveSum([-2,3.2, 4,1,-5,-2,83]))

