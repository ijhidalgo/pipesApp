import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  standalone: false,

  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = "ivan";
  public nameUpper: string = "IVAN";
  public fullName: string = "iVaN jImÉneZ";

  public customDate: Date = new Date();

}
