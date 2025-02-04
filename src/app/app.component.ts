import { Component } from '@angular/core';
import { PrimeNG } from 'primeng/config';
import lara from '@primeng/themes/lara';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private primengConfig: PrimeNG) {}

  ngOnInit() {
    this.primengConfig.ripple.set(true);
  }
}
