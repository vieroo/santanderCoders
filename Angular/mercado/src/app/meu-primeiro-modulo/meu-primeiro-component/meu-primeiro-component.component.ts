import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro-component',
  standalone: true,
  imports: [],
  templateUrl: './meu-primeiro-component.component.html',
  styleUrl: './meu-primeiro-component.component.css',
})
export class MeuPrimeiroComponentComponent {
  // public lastName: string = '';
  // public name: string = '';

  public year: number = 2024;

  acrescentarAno() {
    this.year += 1;
  }

  diminuirAno() {
    this.year -= 1;
  }

  // actionBtn1() {
  //   this.name = 'Eduardo';
  //   this.lastName = 'Viero';
  // }
}
