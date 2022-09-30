export class Avião{
    executivo:string;
    economico: string;
    constructor(
        executivo:string,
        economico:string,
    ){
        this.executivo=executivo
        this.economico=economico
    }
    verExecutivo(){
    console.log(`primeira classe, bom conforto`)
    }
    verEconomico(){
        console.log(`terceira classe, mal confordo`)
    
    
        }
}