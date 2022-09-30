import { RockInRio } from "./RoockInRio"; 
 export class EspaçoFavela extends RockInRio{
    Horario:string;
    Artistas:string;

    constructor(
    Horario:string,
    Artistas:string,    
    data:string,
    ingresso:number,
   
    ){
        super(data,ingresso);
        this.Horario = Horario
        this.Artistas = Artistas
    }
    showDomingo(): void {
        console.log (`As informações sobre o show de sábado é: 
        Data: ${this.data}
        Artista do dia: ${this.Artistas}
        Horário: ${this.Horario})
    }
    ingresDomingo(): void {
        console.log (O preço do ingresso de sábado é: ${this.ingresso}`)
    }
}