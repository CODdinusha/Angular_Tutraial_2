import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // islogedIn: boolean = false;
  // userName: string = 'Dinusha Madhuranga';

  isAdmin : boolean = false;
  isMember : boolean = true;
  isGuest: boolean = false;
}
