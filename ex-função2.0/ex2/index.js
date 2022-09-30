let custo=0, taxa=0;

custo= prompt(" diga o custo, cupade")
taxa= prompt("diga o quanto você vai roubar do cliente")

function imposto( custo, taxa){
custo= parseInt(custo) + ((parseInt(custo) * taxa) / 100)
return alert( custo)


}
imposto( custo, taxa )