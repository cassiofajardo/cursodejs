//maneira 1 (longa)
/*
const h1 = document.querySelector('.container h1');
const data = new Date();

function getWeekDay(weekDay) {
    let weekDayString;
    switch (weekDay) {
        case 0:
            weekDayString = 'domingo';
            return weekDayString;
        case 1:
            weekDayString = 'segunda-feira';
            return weekDayString;
        case 2:
            weekDayString = 'terça-feira';
            return weekDayString;
        case 3:
            weekDayString = 'quarta-feira';
            return weekDayString;
        case 4:
            weekDayString = 'quinta-feira';
            return weekDayString;
        case 5:
            weekDayString = 'sexta-feira';
            return weekDayString;
        case 6:
            weekDayString = 'sábado'
            return weekDayString;
    }    
}
function getMonthName(monthName) {
    let monthNameString;
    switch (monthName) {
        case 0:
            monthNameString = 'janeiro';
            return monthNameString;
        case 1:
            monthNameString = 'fevereiro';
            return monthNameString;
        case 2:
            monthNameString = 'março';
            return monthNameString;
        case 3:
            monthNameString = 'abril';
            return monthNameString;
        case 4:
            weekDayString = 'maio';
            return monthNameString;
        case 5:
            monthNameString = 'junho';
            return monthNameString;
        case 6:
            monthNameString = 'julho';
            return monthNameString;
        case 7:
            weekDayString = 'agosto';
            return monthNameString;
        case 8:
            monthNameString = 'setembro';
            return monthNameString;
        case 9:
            monthNameString = 'outubro';
            return monthNameString;
        case 10:
            monthNameString = 'novembro';
            return monthNameString;
        case 11:
            monthNameString = 'dezembro';
            return monthNameString;       
    }    
}
function criaData(data) {
    const weekDay = data.getDay();
    const monthName = data.getMonth();

    const diaSemana = getWeekDay(weekDay);
    const mes = getMonthName(monthName);

    return `${diaSemana}, ${data.getDate()} de ${mes} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;
}


h1.innerHTML = criaData(data); */

//maneira 2(curta)
const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};
h1.innerHTML = data.toLocaleString('pt-BR', opcoes);



