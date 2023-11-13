
let heroi = ["Oderfla", 8000]


if (heroi [1] <= 1000){

    console.log ("O heroi de nome " + heroi [0] + " esta no nível de Ferro")

} else if (heroi [1] <= 2000){

    console.log ("O heroi de nome " + heroi [0] + " esta no nível de Bronze")

} else if (heroi [1] <= 5000){

    console.log ("O heroi de nome " + heroi [0] + " esta no nível de Prata")

//Na verificação abaixo mudei a verificação lógica, pois se eu segui-se o enunciado do desafio, apresentaria uma categoria errada nos valores de xp entre 5001 e 6000.

} else if (heroi [1] <= 7000){

// Se eu fosse seguir o enunciado a verificação lógica deste bloco deveria ser:
// } else if  (heroi [1] >= 6001 && heroi [1] <= 7000) {

    console.log ("O heroi de nome " + heroi [0] + " esta no nível de Ouro")

} else if (heroi [1] <= 8000){

    console.log ("O heroi de nome " + heroi [0] + " esta no nível de Platina")

} else if (heroi [1] <= 9000){

    console.log ("O heroi de nome " + heroi [0] + " esta no nível de Ascendente")

} else if (heroi [1] <= 10000){

    console.log ("O heroi de nome " + heroi [0] + " esta no nível de Imortal")

} else { 
    
    console.log ("O heroi de nome " + heroi [0] + " esta no nível de Radiante")

}
