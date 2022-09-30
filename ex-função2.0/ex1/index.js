let a, b,c; 
a= prompt("say a  number")
b= prompt("say a  number")
c= prompt("say a number ")

function Pac (a, b,c ){
     maiorN= Math.max(a,b,c)
     return alert(maiorN)
}
          function PacTard(a,b,c){

          menorN= Math.min(a,b,c)
          return alert( menorN)}


PacTard(a,b,c);
Pac(a,b,c);