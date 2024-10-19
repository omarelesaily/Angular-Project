import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-acomponent',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './acomponent.component.html',
  styleUrl: './acomponent.component.css'
})
export class AComponentComponent {
  // Interpolation
  title = 'Angular Project!';

  //Property Binding
  imageSource='https://image.spreadshirtmedia.net/image-server/v1/compositions/T757A1PA4537PT10X0Y12D307665393W6012H6012/views/3,width=550,height=550,appearanceId=1,backgroundColor=FFFFFF,noPt=true/little-spud-potato-lover-potatoes-funny-saying-insulated-water-bottle.jpg';

  // Event Binding 
  onClick() {
    console.log('Button clicked!');
  }

  // Two way Binding
  name:string='Highlight';

  // Directive *ngIf
  isVisible=true;
  toggleVisibility()
  {
    this.isVisible = !this.isVisible;
  }

  // Directive *ngFor
  items = ['Apple', 'Banana', 'Orange'];

  // Directive ngSwitch
  selectedOption = 'A';

}
