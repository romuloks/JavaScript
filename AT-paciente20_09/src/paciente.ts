export class Paciente {
    nome: string; 
    hospital: string;
    plano: string; 
    doença: string; 

    constructor (
        nome: string, 
        hospital: string, 
        plano: string,
        doença: string

    ) {
        this.nome = nome;
        this.hospital= hospital;
        this.plano= plano; 
        this.doença=doença;
    }
    verNome(){
    console.log((`o seu nome é : ${this.nome}`))
    }
    verHospital(){
        console.log(`o seu hospital é : ${this.hospital}`)
    }
    verPlano(){
        console.log(`o seu plano de saúde é : ${this.plano}`)
    }
    verDoença(){
        console.log((`a sua doença é : ${this.doença}`))
    }
    }