const nomes = ['Cássio Fajardo', 'Milena Nascente',
'Genomôma de Olivandávia'];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}

console.log('#########')

for (let i in nomes) {
    console.log(nomes[i])
}

console.log('#########')

for (let valor of nomes) {
    console.log(valor)
} 

console.log('------');

nomes.forEach(function(valor, indice, arrayCompleto) {
    console.log(valor, indice, arrayCompleto)
});