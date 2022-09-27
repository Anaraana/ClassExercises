// const Fibonacci = (n)=>{
//     if (n ===1)
//     return 0;
//     else if (n===2)
//         return 1;
//         else
//         return Fibonacci(n-1) + Fibonacci(n-2)
// }

// console.log(Fibonacci(7))





//Fibonacci Sequence
function Fibonacci(n){
    const fib = [0,1]
    for (let i=2; i<n; i++){
        fib[i] = fib[i-1]+ fib[i-2]
    }
return fib
}
console.log(Fibonacci(8))