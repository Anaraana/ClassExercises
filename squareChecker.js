// Write a function that checks whether the parameter is a square number

// squareChecker(25) → true
// squareChecker(39) → false

const squareChecker = (num1) => {
    if(num1 < 0 ){
        return false
    }
    if(Number.isInteger(Math.sqrt(num1))){
        console.log('true')
    }else{
        console.log('false')
    }
}
squareChecker(81)
squareChecker(176)
squareChecker(25)