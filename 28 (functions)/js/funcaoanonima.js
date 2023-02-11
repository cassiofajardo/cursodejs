
// Função Anônima. O que leva o nome aqui é a constante que armazena a função, por isso é uma função ANÔNIMA. Isso também diz muito sobre o poder de armazenamento de uma variável.//

const raizQuadrada = function (n) {    
return n ** 0.5;
};
console.log(raizQuadrada(9));


// Arrow function:

const raizQuadrada2 = n => n ** 0.5;   // MUITO prático, toda a função anônima foi diminuida para uma pequena linha de código
console.log(raizQuadrada2(9));