const programming = {}

programming.languages = ["javascript", "java"]
programming.difficulty = "9"
programming.usage = "web"
programming.rewarding = true
delete programming.rewarding
programming.isFun = true
programming.languages.push("Python")
programming.difficulty = "8"
    console.log(programming);

for(let i=0; i < programming.languages.length; i++){
    console.log (programming.languages[i]);
}

//if use while loop
let index = 0
while(index < programming.languages.length){
    console.log(programming.languages[index])
    index++
    //index +=1
}



