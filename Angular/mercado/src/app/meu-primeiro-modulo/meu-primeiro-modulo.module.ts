import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeuPrimeiroComponentComponent } from './meu-primeiro-component/meu-primeiro-component.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, MeuPrimeiroComponentComponent],
  exports: [MeuPrimeiroComponentComponent],
})
export class MeuPrimeiroModuloModule {}
