function meuEscopoLocal() {
    const formulario = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
   /* 
    formulario.onsubmit = function (evento) {
        evento.preventDefault();
        console.log('preveniu do padrão que seria mostrar a mensagem somente por milésimos de segundo.')      //essa é a primeira maneira.//
    };  
    */ 
    function recebeEventoForm(evento) {
        evento.preventDefault();   

        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value}, ${sobrenome.value}, ${peso.value} ,${altura.value}</p>`;
    }

    formulario.addEventListener('submit', recebeEventoForm);
     
}
meuEscopoLocal();