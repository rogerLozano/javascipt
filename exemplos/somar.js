// Função para somar N números usando alguns conceitos sobre ecmascript // 
// Arrow function sendo aplicada e o conceito de rest //  


let soma = (...par)=>{
    var resultado_soma = 0; 
        par.forEach((resultado_funcao) => {
            resultado_soma += resultado_funcao;     
        })
        return  resultado_soma;
    } 

    // testando o resultado da função 
var teste = soma(1,2,3,4);   

