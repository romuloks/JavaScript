let t1=0,t2=0;
t1=prompt("digite o numero da temperatura:");
function temperatura(t1){
    t2=(parseInt(t1)-32) /1.8
    return alert(t2.toFixed(2))
}
temperatura(t1)