export class contaBanco {
    titular: string;
    agencia:string;
    conta: string;
    saldo: number;
constructor(
    titular: string,
    agencia: string,
    conta: string,
    saldo: number
){
this.titular = titular
this.agencia = agencia
this.conta = conta
this.saldo = saldo 

}
verSaldo(){// metos
    console.log(`o saldo da sua conta é ${this.saldo}`)
}
sacar(valor: number){
    if(valor > 0 && valor <= this.saldo){
     this.saldo -=valor
     console.log(`saque de R$ ${valor}saquer realizado com sucessor`);
 }else{
    console.log(`saque de R$ ${valor}impossivel realizar o saquer`);

 } 
}
deposito(valor: number){
    if(valor > 0){
        this.saldo +=valor
        console.log(`deposito de R$ ${valor}deposito realizado com sucessor`);
    }else{
        console.log(`deposito de R$ ${valor}impossivel realizar o deposito`);
    }
}
}
