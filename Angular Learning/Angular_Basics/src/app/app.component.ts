import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AComponentComponent } from "./acomponent/acomponent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Basics';
}
