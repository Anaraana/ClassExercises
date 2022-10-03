// Write a function that finds the nth (parameter) largest number from the array

const nthLargest = (arr, n)=>{

    const sortedAscending= arr.sort((num1, num2)=>{
        // console.log(num1,num2)
        if(num1>num2)
        return -1
        else return 1
    })
    console.log(sortedAscending[n-1])

}
nthLargest([203, 201,402,4891, 20,-2],3)
nthLargest([-20,32, 59, 75, -43],2)