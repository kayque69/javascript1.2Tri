//revisao

//Tipos primitivos 

//Numeros
let numero = 30
let decimal =20.30
//string
let nome = "não sei, você que sabe ?"
let nome1 = "NÃO SEI, VOCÊ QUE SABE?"


console.log(nome === nome1); // false

const inputMinusculo = nome1.toLowerCase();

console.log(nome === inputMinusculo); // true

const senha = "minhaSenha123"
console.log(senha.length) // 12 + 1 caracteres




let nv = true;
let nz = false;

if(nv!==nz){
    console.log(`nv é diferente, pois ele é ${nv}`)
}