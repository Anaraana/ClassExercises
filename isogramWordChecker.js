// Write a function that checks if the parameter (string) is an isogram word
// Isogram word is a word that has no repeating letter in a row
// Ex: Bootcamp → Not an isogram word
// Botocamp → Isogram word

const isogramWord = (str)=>{
    for(let i=0; i<str.length; i++){
        if(str[i]===str[i+1]){
            console.log(" not an isogram word")
            return
        }
    }
console.log("isogram word")
}
isogramWord("Bootcamp")
isogramWord("Botocamp")