export class Patinete{
    rodas: string;
    guidon: string;
    freio: string;
    
    constructor(
        rodas: string,
        guidon: string,
        freio: string,
    ){
        this.rodas = rodas;
        this.guidon = guidon;
        this.freio = freio;
    
    }
    verrodas(){
        console.log(`seu patinete tem ros ? : ${this.rodas}, \nseu patinete tem guidon ? : ${this.guidon}, \nseu patinete tem freio ? : ${this.freio}`)}}