
function findTheLargest(num1, num2,num3){
    console.log (num1, num2, num3)
    if(typeof num1 === "string" || typeof num2 === "string" || typeof num3 === "string"){
        console.log("not all numbers are number type")
        return
    }
    if(num1 > num2 && num1 > num3){
        console.log(`${num1} is the largest number among ${num1}, ${num2} and ${num3}`)
    }
    else if(num2>num1 && num2>num3){
        console.log(`${num2} is the largest number among ${num1}, ${num2} and ${num3}`)
    }
    else {
        console.log(`${num2} is the largest number among ${num1}, ${num2} and ${num3}`)
    }
      //else if(num3>num1 && num3>num2); ingej bichij bolno gehdde shaardlagagui.uchir ni ugaasa l uldej bgam chine
      //console.log(`${num3} is the largest number among ${num1}, ${num2} and ${num3}`)
};

findTheLargest (30,2, -13);
