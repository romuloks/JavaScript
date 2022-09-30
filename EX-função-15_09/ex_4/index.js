let imcp, peso, altura
peso = prompt("digite seu Peso:")
altura = prompt("digite sua Aultura:")

function resultado() {
imcp = parseFloat(peso) / parseFloat(altura * altura)
return alert(imcp.toFixed(2))
}
resultado (peso, altura)