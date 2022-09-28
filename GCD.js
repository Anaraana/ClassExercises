// Write an arrow function that takes 2 parameters and finds the “Greatest Common Divisor”
// If the parameters are string, convert it to number, if it’s NaN give an error: “Given arguments are not numbers”
// If the parameters are negative numbers, make sure to convert them to positive numbers

const gcd = (num1, num2) => {
    if((typeof num1 ==='string') || (typeof num2 ==='string')){
        num1 = Number.parseInt(num1);
        num2 = Number.parseInt(num2);
    }
    if(num1 < 0 || num2 < 0 ){
        num1 = Math.abs(num1);
        num2 = Math.abs(num2);
    }
    //console.log(num1, num2)
   if(isNaN(num1) || (isNaN(num2))){
    console.log('Given arguments are not numbers')
   }
   //swap
   let temp;
   while(num2){
    num1 = num1%num2

    temp = num2; 
    num2 = num1;
    num1 = temp;

   }
   return(num1)
} 


console.log(gcd('-9', 27))
console.log(gcd(15,20))
