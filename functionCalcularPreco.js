


function CalcularDesconto(precoEtiqueta,porcentagem){
    const decimal = porcentagem / 100;
    let desconto = precoEtiqueta - (precoEtiqueta * decimal)
    return desconto;
} 

function CalcularJuros(precoEtiqueta,porcentagem){
    //trasformando porcentagem em decimal
    let decimal = porcentagem / 100;
    
    //Cálculo
    let juros = precoEtiqueta + (precoEtiqueta * decimal)

    return juros;

}


function escolherFormaPagamento(opcao, valorProduto,){
    if(opcao === 1){
        console.log(CalcularDesconto(valorProduto,10) + " reais")

    }else if(opcao === 2){
        console.log(CalcularDesconto(valorProduto,15) + " reais")

    }else if(opcao === 3){
        console.log(valorProduto + " reais")


    }else if(opcao === 4){
        console.log(CalcularJuros(valorProduto, 10) + " reais")

    }else{
        console.log("Opção inválida")
    }

}

escolherFormaPagamento(1,100)
escolherFormaPagamento(2,100)
escolherFormaPagamento(3,100)
escolherFormaPagamento(4,100)
escolherFormaPagamento(4,375)