import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { FormsModule } from '@angular/forms'; // Add FormsModule
import { CommonModule } from '@angular/common';
import { PersonalInfo } from '../Models/PersonalInfo';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  message: string = '';
  personalInfo:PersonalInfo=new PersonalInfo('', '', '', 0, 0, 0, '', '');
  constructor(private communicationService: CommunicationService) {
    this.communicationService.message$.subscribe((msg) => {
      this.message = msg;
    });

    this.communicationService.personalInfo$.subscribe((info) => {
      this.personalInfo = { ...info};
    });
  }

  updateMessage() {
    this.communicationService.sendMessage(this.message);
  }

  updatePersonalInfo() {
    this.communicationService.updatePersonalInfo(this.personalInfo);
  }
}
