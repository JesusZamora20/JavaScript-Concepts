const objeto = {
    name: "jesus",
    apellido: "bermudez",
    edad: 35
}
//PARSE = text -> object
console.log(JSON.parse("{}"));
console.log(JSON.parse("true"));

//STRINGIFY = object -> text
console.log(JSON.stringify(true));
console.log(JSON.stringify(objeto));
console.log(JSON.parse('{"name": "jesus","apellido": "bermudez","edad": 35}'));

