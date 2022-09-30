export class Banco {
    nome: string;
    agencia: string;
    conta: string; 
    saldo: string;

    constructor(

    nome: string, 
    agencia: string,
    conta: string, 
    saldo: string
    )
    {
        this.nome = nome
        this.agencia = agencia
        this.conta = conta 
        this.saldo = saldo

    }
    verNome() {
        console.log(`Nome: ${this.nome}`)
    }
    verAgencia() {
        console.log(`Agencia: ${this.agencia}`)
    }
    verConta(){
        console.log(`Agencia: ${this.agencia}`)
    }
     verSaldo(){
        console.log(`Saldo: ${this.saldo}`)
     }



}
