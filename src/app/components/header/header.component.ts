import { Component } from '@angular/core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cartitem: Number = 0;
  faCoffee = faCartArrowDown;
}
