const romanConversion = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C'
}

const intToRoman = (num) => {
    console.log(num)
    if(typeof num !=='number'){
        console.log(`${num} is not a number type`)
        return
    }
    if(num<=0){
        console.log("Given number is not positive")
        return
    }
    let romanNumber = ''
    Object.entries(romanConversion).reverse().forEach(([int,rom])=>{
        int= parseInt(int)
        // console.log(int,rom)
        while(num >=int){
            romanNumber += rom
            num -= int
        }
    })
    console.log(romanNumber)
}

intToRoman(338)