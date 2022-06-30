import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  textos: string[] = [];

  texto: string = "ASDFghjkl";
  numero: number = 1234567;
  cep: string = "60123987";
  cpf: string = "12345678900"
  data: Date = new Date();

  add(texto: string){
    this.textos.push(texto);
  }

}
