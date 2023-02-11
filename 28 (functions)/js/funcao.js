function soma(x, y) {
    return x + y;
}

const resultado = soma(5, 5); 
console.log(resultado);

// outra maneira:

function some(x, y) {
    const resultado = x + y;   //Importante notar que, a constante resultado desta função, está operando normalmente mesmo vendo que outra constante com o mesmo nome foi declarada anteriormente. Isso só é possível pois as variáveis declaradas dentro de uma função são PROTEGIDAS e só funcionam dentro da função, ou seja, é como se uma variável de nome "resultado" não tivesse sido declarada anteriormente.
    return resultado;
}
console.log(some(5,2));
console.log(some(150, 150));
console.log(some('Olá', ' mundo!'));
