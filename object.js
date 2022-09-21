const person = {}

person.firstName = "Anar"
person.lastName = "Bayanjargal"
//person.occupation = "developer"
person['occupation'] = "developer"
console.log(person);

person.hobby = "tennis"
console.log(person);

delete person.occupation;
console.log(person);

//console.log(typeof person)
//console.log("as")



const person = {}
person.firstName = "Alex"
person[`lastName`]= "Enkhbold"
    console.log(person.lastName);
person.firstName = "Justin"
delete (person.firstName) 
    console.log(person.firstName)
    

// const person = {firstName: "Anar", lastName: "Bayanjargal", occupation: "developer"}

//     console.log(person)

const person = {hobby: "tennis"}
person.firstName = "Anar"
person.lastName = "Bayanjargal"
person[`occupation`]= "developer"
delete(person.occupation)
console.log(person)
