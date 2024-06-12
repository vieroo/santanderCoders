import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { ListaService } from './lista.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  image: string =
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wJTIwY29kZXxlbnwwfHwwfHx8MA%3D%3D';

  result!: string;

  listOfCats$!: Observable<any>;
  constructor(private listaService: ListaService) {}

  ngOnInit() {
    this.getListaFromService();
  }

  getListaFromService() {
    this.listOfCats$ = this.listaService.getList();
  }

  receberResult(valor: string) {
    this.result = valor;
  }
}
