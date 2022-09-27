// convert to JSON
// const person = {name: "John", occupation: "Radio Host"}
// const stringfiedPerson = JSON.stringify(person)
//     console.log(stringfiedPerson)


// console.log(JSON.parse(stringifiedPerson), typeof JSON.parse(stringifiedPerson)) bolohgui bna

// Union Array

// const findUnion = (arr1, arr2) => {
//     // console.log(arr1, arr2)
//     const union = []
//     arr1.forEach((num) => {
//         if(!union.includes (num))
//             union.push(num)
//     })
//     arr2.forEach((num) => {
//         if(!union.includes(num))
//             union.push(num)
//     })
//     return union
// };
// console.log(findUnion([1,2,3,1], [2,1,4,2]))

// Symmetric Difference Array
// const symmetricDif = (arr1, arr2) => {
//     console.log (arr1,arr2)
//     const symmetric = symmetricDif.filter(() => {


//     })



// }
// console.log(symmetricDif([1, 2, 3, 4], [1, 4, 5])) HOmework

//  sort an Array
 const alphabets = [
    {letter: 'a', index: 1},
    {letter: 'm', index: 13},
    {letter: 'e', index: 5},
    {letter: 's', index: 19},
    {letter: 'z', index: 26},
    {letter: 't', index: 20},
    {letter: 'o', index: 15},
    {letter: 'h', index: 8},
 ]
 const sortFunction = (arr) => {
    // console.log(arr)
   const sorted = arr.sort((obj1, obj2) => {
    console.log('obj1', obj1)
    console.log('obj2' , obj2)
    console.log('---')
        if(obj1.index > obj2.index)
            return 1
        else return -1
   })
   console.log(sorted)
 }
console.log(alphabets)
