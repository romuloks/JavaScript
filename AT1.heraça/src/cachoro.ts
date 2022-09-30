
import { Animal } from "./animal";

export class Cachorro extends Animal{
    latir: string;
    constructor(
        latir: string,
        especie: string,
        idade: number,
        familia: string,
        nome: string
    ){
       super(especie, idade, familia, nome)
       this.latir = latir
         
    }

    correr(){
        console.log("Correndo igual um cachorro");
    }

    dormir(){
        console.log("Dormindo igual o jose")
    }

    berrar(){
        console.log("berrar igual o cachorro ")
    }


}