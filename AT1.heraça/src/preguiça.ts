import{ Animal } from "./animal";

export class Preguiça extends Animal {
    lerdeza: string;
    preguica: string;

    constructor(
        lerdeza: string,
        preguica: string,
        especie: string,
        familia: string,
        idade:number,
        nome:string,

    ){
        super(especie, idade,familia,nome)
        this.lerdeza=lerdeza
        this.preguica=preguica
    }
    lutar(){
        console.log("preguiças não lutam ")
    }
    dormir() {
        console.log("dormir como uma preguiça")
    }
    berrar(){
        console.log("preguiça quase não faz barulho")
    }
}