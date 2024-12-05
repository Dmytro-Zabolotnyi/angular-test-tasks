import { Component } from '@angular/core';
import { HeaderComponent } from '@components/header/header.component';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [
    HeaderComponent,
  ],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss'
})
export class HomeHeaderComponent {

}
