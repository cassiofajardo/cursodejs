const num = Number(prompt('Digite um número:'));  // o prompt retorna uma STRING, por isso foi envolto por Number()

const numeroTitulo = document.getElementById('numero-titulo'); // poderia ser utilizado o querySelector no lugar de getElementById
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = num; // não se trata de "innerHTML(num)", e sim de ATRIBUIR o resultado de num no numeroTitulo pelo método .innerHTML//
texto.innerHTML = `<p>Raiz quadrada: ${num ** 0.5}</p><br><p>${num} é inteiro? ${Number.isInteger(num)}</p><br><p>É NaN? ${Number.isNaN(num)}</p><br><p>Arredondando para baixo: ${Math.floor(num)}</p><br><p>Arredondando para cima: ${Math.ceil(num)}</p><br><p>Com duas casas decimais: ${num.toFixed(2)}</p>`;
