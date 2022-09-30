export class Funcionário{     
    nome: string;
      cpf: string;     
      ct: string;     
      cargo: string;     
      horario: string

      constructor(  
      nome: string, 
      cpf: string,    
      ct: string,   
     cargo: string,   
     horario: string, ){ 
    this.nome = nome; 
    this.cpf = cpf;
    this.ct = ct; 
   this.cargo = cargo;   
   this.horario = horario;
   } vernome(){console.log(`seu nome é : ${this.nome}, \nseu cpf é : ${this.cpf}, \nsua ct é : ${this.ct}, \nseu cargo é : ${this.cargo}, \nseu horario é : ${this.horario}`) }
  }