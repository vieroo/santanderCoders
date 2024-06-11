import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mercado';
}
