/*
for (let i = 200; i <= 80000; i += 3) {
    console.log(i)
}
*/

/*for (let i = 0; i >= -1000; i -= 10) {
    console.log(i)
}*/

/*for (let i = -700; i <= 0; i += 20 * 1.5) {
    console.log(`resultado ${i}`)
}*/

/*for (let i = 0; i <= 20; i++) {    // Verifica os números pares entre 0 e 20. se o 
    const par = i % 2 === 0;       // resto da divisão entre o i e 2 for igual a 0, 
    console.log(i, par)            // (ou seja, um número par) a variável par retorna
} */                                 // true, caso contrário retorna false (ímpar).

// O mesmo código utilizando operação ternária para retornar uma string
// no lugar de true ou false.

for (let i = 0; i <= 20; i++) {    
    const par = i % 2 === 0 ? 'par' : 'impar';  
    console.log(i, par)          