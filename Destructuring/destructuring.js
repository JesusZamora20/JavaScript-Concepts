let numeros= [1,2,3];

//without destructuring
let uno = numeros[0],
dos = numeros[1],
tres = numeros[2];

console.log(uno,dos,tres);

//destructuring
const [one, two, three] = [1,2,3];
console.log(one,two,three);

let person = {
    name: "Stephany",
    lastName: "Rozo",
    age:23
}

let {name, lastName, age} = person;
console.log(name, lastName ,age);