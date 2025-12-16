import { Component } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../core/animations/route.animations';

@Component({
  selector: 'uh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
}
