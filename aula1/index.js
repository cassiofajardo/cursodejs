const nome = 'Cássio';
const idade = 30;
const peso = 75;
const altura = 1.78;
let imc;
let anoNascimento;
imc = peso / (altura ** 2);
anoNascimento = 2023 - idade;

console.log(`${nome} tem ${idade} anos, nasceu em ${anoNascimento}, pesa ${peso}kg e tem ${altura}m de altura. Seu IMC é de ${imc}`);
