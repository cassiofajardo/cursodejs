

// Método é uma função interna de um objeto. Exemplo:

 const pessoa = {
    nome: 'Jacaré',
    sobrenome: 'Axé',
    idade: 20,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} é o meu nome!`)   //Funciona da mesma maneira que a função, mas quando é interna a um objeto, chamamos de método.
    }                                                                // ''this'' neste caso é outra forma de chamar o nome do objeto pessoa.
 }
 pessoa.fala();



//                      //
//                     //
//                    //         /
//                   //         /                    
//                  //          \ -------     |
//                 //         /\ \ ------    || 
//                //       / //\\ \ -----    ||
//               //       / //  \\ \ ----    ||     
//             |     --- / //-  -\\ \ ---    ||
//             ||    -- / //--  --\\ \ --    || 
//             ||    -- \ \\--  --// / --    ||
//             ||    --- \ \\-  -// / ---    |
//             ||    ---- \ \\  // /       //    
//             ||    ----- \ \\// /       //     
//             ||    ------ \ \/         //     
//              |    ------- \          //      
//                           /         //
//                          /         //
//                                   //
//                                  //