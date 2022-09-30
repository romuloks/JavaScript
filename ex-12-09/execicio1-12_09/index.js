let peso, exesso, multa;

 peso =prompt("digite o pesso:")
  if(parseFloat(peso)> 50 ){
    exesso= peso-50
    multa=exesso*4
    alert("você  tera que paga a multa:" + multa.toFixed(2)+ "multa")}

else{
    alert("fica tranguilo não pagara multa:");}
