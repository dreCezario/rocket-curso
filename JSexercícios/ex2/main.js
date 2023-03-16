const familia = {
 receita : [5000, 5600, 600],
 despesas: [100, 150, 1200, 600, 960, 372, 1500],
}


function soma(array) {
    let total = 0

    for(let value of array){
        total += value
    }

    return total
}

function lucro() {
    const receitaTotal = soma(familia.receita)
    const despesaTotal = soma(familia.despesas)

    lucroTotal = (receitaTotal - despesaTotal)
    if(lucroTotal >= 1){
        console.log(`Seu saldo foi positivo e de ${lucroTotal}R$`)
    }
    if(lucroTotal < 1){
        console.log(`Seu saldo foi negativo e de ${lucroTotal}R$`)
    }
} 

lucro()