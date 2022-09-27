// Write a function that checks if the string has equal amount of X and O in it.
//    xoXo → true
//    xoXoOXoo → false
//    oxOxXoXo → true

const xoCounter = (str) => {
    sum = 0
    let stringlower = str.toLowerCase()
    console.log(stringlower)
for (let i = 0; i < stringlower.length; i++ ){
    if(stringlower[i] ==="x"){
        sum++
    }else if(stringlower[i] ==="o"){
        sum--
    }
    return !sum
}

}
console.log(xoCounter("xoxxOO"))


// in a different way
// let x = 0
//     o = 0
// const xoCounter = (str) => {
//     for (let i=0; i<str.length; i++){
//         if(str[i].toLowerCase(str)==='x'){
//             x+=1
//         }else if(str[i].toLowerCase(str)==='o'){
//             o+=1
//         }else{
//             console.log('error')
//             return
//         }
//     }
//     if(x===0){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }
// xoCounter('xooooxoxo')
// xoCounter('xoxoXXOO')
// xoCounter('xooxxO')