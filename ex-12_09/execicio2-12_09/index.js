let c,n,E,ex,st
 n=prompt("qual é o codigo do trabalhador?")
if(n<=50){
    c=n*10
    alert("\nseu salario e igual é:" + c)
}else if(n>50){
    c=n*10
    E= n-50
    ex= E*20
    st=ex+c
    alert("\n seu salario exedente é:" + ex +"\n seu salario total é:" + st + "\n seu salario nomal é:" + c )
}
