
let score = prompt('Digite a sua nota')


if(score >= 90){
    document.write('Parabéns você tirou um A')
}
    
if(score <= 89 && score >= 80){
    document.write('Você tirou um B')
}
if(score <= 79 && score >= 70){
    document.write('Pode melhorar,você tirou um C')
}
if(score <= 69 && score >= 60){
    document.write('Estude, você tirou um D')
}
if(score < 60){
    document.write('Super lixo, você tirou um F')
}

