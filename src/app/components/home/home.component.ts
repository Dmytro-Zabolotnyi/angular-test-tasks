import { Component } from '@angular/core';
import { HomeHeaderComponent } from '@components/home/home-header/home-header.component';
import { FooterComponent } from '@components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeHeaderComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
