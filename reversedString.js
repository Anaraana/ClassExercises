// Write a function that takes a string as a parameter and returns its reversed version
//    Hello -> olleH
//    Bootcamp -> pmactooB
   const reversedString = (str) =>{
    let newString = "";
    for(let i = str.length - 1; i>=0; i--){
        newString +=str[i];
    }
    return newString;
   }
   console.log(reversedString("Hello"));
   console.log(reversedString("Bootcamp"));