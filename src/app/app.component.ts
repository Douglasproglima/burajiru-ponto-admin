import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Burajiru Ponto';

  ponto: Ponto = new Ponto(2, 'Ponto Teste 2', '26/07/2018 21:26');
}

export class Ponto {
  public id: number;
  public descricao: string;
  public data: string;

  constructor(id: number, descricao: string, data: string){
    this.id = id;
    this.descricao = descricao;
    this.data = data;
  }
}
