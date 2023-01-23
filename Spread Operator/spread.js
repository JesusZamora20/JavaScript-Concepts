// parametros REST
function sumar(a,b,...c){
    let result = a+b;

    c.forEach((n) => result += n);

    return result;
}

console.log(sumar(1,2,3,4));

//sperad operator
const arr1 = [1,2,3,4,5], arr2 = [6,7,8,9,0];

const arr3 = [...arr1, ...arr2];
console.log(arr3);