function rankedCalculator (victorys, defeats) {
    return (victorys - defeats)
}

let rankedResults = rankedCalculator (115, 1)

if (rankedResults <= 10){
    console.log ("O herói tem saldo de " + rankedResults + " vitórias, portanto está no nível Ferro")
} else if (rankedResults <= 20){
    console.log ("O herói tem saldo de " + rankedResults + " vitórias, portanto está no nível Bronze")
} else if (rankedResults <= 50){
    console.log ("O herói tem saldo de " + rankedResults + " vitórias, portanto está no nível Prata")
} else if (rankedResults <= 80){
    console.log ("O herói tem saldo de " + rankedResults + " vitórias, portanto está no nível Ouro")
} else if (rankedResults <= 90){
    console.log ("O herói tem saldo de " + rankedResults + " vitórias, portanto está no nível Diamante")
} else if (rankedResults <= 100){
    console.log ("O herói tem saldo de " + rankedResults + " vitórias, portanto está no nível Lendário")
} else {
    console.log ("O herói tem saldo de " + rankedResults + " vitórias, portanto está no nível Imortal")
}