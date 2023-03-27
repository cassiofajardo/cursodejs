const pessoa = {
    nome: 'Cássio',
    sobrenome: 'Fajardo',
    idade: 30
};

for (let chaves in pessoa) {
    console.log(`${chaves}:`, pessoa[chaves]);
}