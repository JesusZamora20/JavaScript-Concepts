console.log(this);
/*en el navegador, this, hace referencia al objeto window*/
console.log(this === window);
this.nombre = 'Contexto global';
console.log(this.nombre);

const obj = {
    nombre: "Contexto Objeto",
    imprimir: function (){
        console.log(this.nombre); 
    }
}
obj.imprimir();
//las arrow function heredan el contexto de donde fueron creadas

function persona(nombre){
    this.nombre = nombre;

    //return console.log(this.nombre);
    return function(){
        console.log(this.nombre);
    }
}

let jesus = new persona('Jesus');
jesus();
