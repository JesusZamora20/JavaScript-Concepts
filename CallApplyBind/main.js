this.lugar = "Global Context";

function saludar(saludo, who){
    console.log(`${saludo} ${who} from ${this.lugar}`);
}

saludar();

const obj = {
    lugar : "Object context"
}

saludar.call(obj, "Hi", "Jesus");
saludar.call(null, "Hi", "Jesus");
saludar.apply(obj, ["Bye", "Jesus"]);
saludar.apply(null, ["Bye", "Jesus"]);

const persona = {
    name: "Jesus",
    saludar: function (){
        console.log(`Hola ${this.name}`);
    }
}

persona.saludar();

const otraPersona = {
    saludar: persona.saludar.bind(persona)
}

otraPersona.saludar();


