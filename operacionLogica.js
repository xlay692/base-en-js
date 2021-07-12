console.log('hola mundo')
    //Tipos de datos en js
    //String cadena de caracteres.'hola' 'chanchito feliz'
    //Boolean: true,false
    //Null: nulo
    //Number: 123 
    //123 es un String, es un distinto a 123 que es un number
    // underfined: 
    //objet: objeto

//var
//let
//cont

let miPrimeraVariable = 'mi primera variable'
    //console.log(miPrimeraVariable)
    //mutabilidad
miPrimeraVariable = 'Esto a cambiado'
    //console.log(miPrimeraVariable);
    //boolean
let miBoolean = true
let miOtroBool = false

let miNumero = 0
let miNumero2 = 12
let miNumero3 = 250

//console.log(miNumero, miNumero2, miBoolean, miPrimeraVariable);

let undef
    //console.log(undef);

let nulo = null
    //console.log(nulo);
    //objeto vacio
const miPrimerObjeto = {}

//objeto
const miObjeto = {
        unNumero: 12,
        unString: 'Esta cadena de caracteres',
        unaCondicion: true
    }
    //console.log(miObjeto.unString);

const arrVacio = []
const arr = ['1', '2', 'hola', 'mundo', miObjeto]

//console.log(arrVacio, arr)
arrVacio.push(5)
arrVacio.push(3)
arrVacio.push(1)
arrVacio.push('hola')
arrVacio.push('miPrmeraVariable')
    //console.log(arrVacio);
const suma = 1 + 2
const restar = 1 - 2
const multiplicar = 2 * 3
const dividir = 9 / 3

//console.log(suma, restar, multiplicar, dividir)

const modulo = 10 % 3
    //console.log(modulo)
let num = 5
    //const vs let
num++
num++
num++
num++
num++
//console.log(num)

// operadores comparacion
const resultado3 = 5 < 6
const resultado4 = 5 < 5
const resultado5 = 5 > 6
const resultado6 = 5 > 6
const resultado7 = 5 <= 5
const resultado8 = 5 <= 6
const resultado9 = 5 >= 5
const resultado10 = 5 >= 6


//console.log(resultado7, resultado8);

//or||, and &&, lot ¡¡

const resultadoOr = false || true
    //console.log(resultadoOr);

const resultadoAnd = true && true && true && true
    //console.log(resultadoAnd);

const resultadoNot = !true
console.log(resultadoNot);