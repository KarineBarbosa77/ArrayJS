
var cores = ['rosa', 'laranja', 'azul', 'verde', 'vermelho']


var corEscolhida = cores[Math.floor(Math.random() * cores.length)]


alert("Bem-vindo ao Jogo de Cores!\nTente adivinhar a cor escolhida.")

while(true) {
    
    var palpite = prompt("Digite uma cor:")

    if (palpite == corEscolhida) {
        alert("Parabéns! Você acertou a cor: " + corEscolhida + ".")
        break; 
    } else {
        alert("Tente novamente.")
    }
}
