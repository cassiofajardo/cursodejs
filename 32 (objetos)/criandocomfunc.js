  // Essa função vai retornar os valores de nome, sobrenome e anoNascimento em um objeto, detalhe para as {} também após return.

function criarPessoa(nome, sobrenome, anoNascimento) {  
    return {
        nome: nome,
        sobrenome: sobrenome,
        anoNascimento: anoNascimento
    }
}

const pessoa1 = criarPessoa('Cássio', 'Machado', 30);    //Muito mais prático pra criar vários objetos quando necessário
const pessoa2 = criarPessoa('Camila', 'Machado', 26);

console.log(pessoa1);
console.log(pessoa2.nome);


// versão diminuida da função:

function criarPessoa2(nome, sobrenome, anoNascimento) {
    return {nome, sobrenome, anoNascimento}
};