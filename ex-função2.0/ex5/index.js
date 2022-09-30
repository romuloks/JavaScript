let a, b, soma, subtração, multiplicação, divisão;

a= prompt(" diga um numero")
b= prompt("diga um numero")

function operações(a,b) {

soma= parseInt(a)+parseInt(b)
subtração= parseInt(a)-parseInt(b)
multiplicação= parseInt(a)*parseInt(b)
divisão= parseInt(a)/parseInt(b)

return alert("a soma é " + soma + "\na subtração é " + subtração + "\na multiplicação é " + multiplicação + "\na divisão é " + divisão) 

}
operações(a,b);