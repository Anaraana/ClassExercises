// Write a function that takes a number and it should console log all the numbers between 1 and parameter value
// BUT instead of the numbers that are divisible by 3, it should print “Gurvaa”, and instead of numbers divisible by 5, it should print “Tavka”
//    1, 2, Gurvaa, 4, Tavka, Gurvaa, 7, 8, Gurvaa, Tavka, etc

const gurvaaTavka = (n1) =>{
    for (let i=1; i <= n1; i++){
        if(i % 3 ===0)
            console.log("Gurvaa");
        else if(i % 5 ===0)
            console.log("Tavka");
        else
            console.log(i);
        }
}

gurvaaTavka(22)

