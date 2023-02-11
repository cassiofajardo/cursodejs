function meuEscopoLocal() {
    const formulario = document.querySelector('.formulario');
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
        
        console.log(nome.value, sobrenome.value, peso.value, altura.value);
    }

    formulario.addEventListener('submit', recebeEventoForm);
     
}
meuEscopoLocal();