import { Animal } from "./animal";

export class Cavalo extends Animal { 
    cavalga: string;
    pasta: string;

    constructor (
        cavalga: string,
        pasta: string, 
        especie: string,
        familia: string,
        idade:number,
        nome: string
    ) { super(especie, idade,familia, nome)

        this.cavalga= cavalga
        this.pasta= pasta 

    }
    lutar() {
        console.log("cavalos lutam dando coices")
    }
    correr() {
        console.log(" correr como um cavalo")
    }
    berrar() {
        console.log(" cavalos relicham")
    }
}