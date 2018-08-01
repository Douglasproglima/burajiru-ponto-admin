export class Empresa {
  public id: number;
  public razao_social: string;
  public empreteira: string;

  constructor(id: number, razao_social: string, empreteira: string){
    this.id = id;
    this.razao_social = razao_social;
    this.empreteira = empreteira;
  }
}
