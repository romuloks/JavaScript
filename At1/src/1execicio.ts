    export class Cliente {
nome : string;
idade : number;
 cpf : string;
 telefone : string

 constructor(
    nome : string,
    idade : number,
    cpf : string,
    telefone : string
 ){
    this.nome = nome
    this.idade = idade
    this.cpf = cpf
    this.telefone = telefone
}
verNome () {
    console.log (`Cliente: ${this.nome}.`)
}
verIdade () {
    console.log (`Idade: ${this.idade}.`)
}
verCpf () {
    console.log (`cpf: ${this.cpf}.`)
}
verTelefone () {
    console.log (`telefone: ${this.telefone}.`)
}
}