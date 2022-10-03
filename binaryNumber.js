// Write a function that converts a binary number 
// to a decimal number

const binaryNumber = (x) =>{
    x = x.toString()
    console.log(x)
    const splitedArray = x.split('').reverse()
    console.log(splitedArray)

    let sum = 0
    splitedArray.forEach((item, index) => {
        item = parseInt(item)
        console.log(item, index)
        sum += item * (2**index)
    })
    
console.log(sum)

    

}
binaryNumber(10101010)


// console.log('101'.split(''))