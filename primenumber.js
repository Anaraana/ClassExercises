// const checkPrime = (x) => {
//     if (x ===1) {
//         return console.log(x + ' is not a prime number!')
//     } else if (x > 1){
//         for (let i = 2; i <= x/2; i++){
//             if (x %i ===0){
//                 console.log(x + ' is not a prime number!')
//                return
//             }
            
//             }
//             console.log(x + ' is a prime number!')
//         }
//     }
// checkPrime(11)


// const checkPrime = (x) => {
//     if (x ===1) {
//        return console.log(x + 'is not a prime number!')
//     }else if (x>1){
//         for (let i = 2; i<=x/2; i++){
//             if (x%i===0){
//                 return  console.log(x + 'is not a prime number!')
              
//         }
//         }
//         console.log(x + ' is a prime number!')
//     }
// }
// checkPrime(11)

// const checkPrime = (x) => {
//     if (x ===1) {
//         return console.log(x + ' is not a prime number!')
//     } else if (x > 1){
//         for (let i = 2; i <= x/2; i++){
//             if (x %i ===0){
//                 console.log(x + ' is not a prime number!')
//                return
//             }
            
//             }
//             console.log(x + ' is a prime number!')
//         }
//     }
// checkPrime(11)


const checkPrime = (x) => {
    if (x ===1){
    return console.log(x + "is not a prime number!")
    } else if (x >1 ){
        for (let i=2; i<=x/2; i++){
            if (x%2===0){
               console.log(x + " is not a prime number!")
               return 
            }
        }
            console.log(x + " is a prime number!")
    }

}
checkPrime(11)