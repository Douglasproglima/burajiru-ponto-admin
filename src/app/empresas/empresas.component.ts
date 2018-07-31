import { Component, OnInit } from '@angular/core';

//consta NOME = Array<TipoDeDados> = []; ou TipoDados[] = [];
const EMPRESAS: Array<any> = [
  { id: 1, razao_social: 'Isin', empreteira: 'Suri-Emu' },
  { id: 2, razao_social: 'Sony', empreteira: 'Suri-Emu' },
  { id: 3, razao_social: 'Makita', empreteira: 'Suri-Emu' },
  { id: 4, razao_social: 'Isin', empreteira: 'Human' },
  { id: 5, razao_social: 'Isin', empreteira: 'Marusan' },
  { id: 6, razao_social: 'Toyota', empreteira: 'Suri-Emu' },
  { id: 7, razao_social: 'Sharp', empreteira: 'Suri-Emu' }
];

@Component({
  selector: 'empresas',
  templateUrl: './empresas.component.html'
})

export class EmpresasComponent implements OnInit {

  public empresas;

  public constructor() {

  }

  //Método onde será carregado as informações da API
  public ngOnInit() {
    this.empresas = EMPRESAS;
  }
}
