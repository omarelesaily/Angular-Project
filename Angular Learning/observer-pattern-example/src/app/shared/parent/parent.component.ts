
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';
import { CommunicationService } from '../communication.service';
import { FormsModule } from '@angular/forms'; // Add FormsModule
import { PersonalInfo } from '../Models/PersonalInfo';


@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,FormsModule,CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit{
  message: string = '';
  personalInfo:PersonalInfo=new PersonalInfo('', '', '', 0, 0, 0, '', '');

  constructor(private communicationService: CommunicationService) {}

  ngOnInit() {
    this.communicationService.message$.subscribe((msg) => {
      this.message = msg;
    });

    this.communicationService.personalInfo$.subscribe((info) => {
      this.personalInfo = { ...info };
    });
  }

  updateMessage() {
    this.communicationService.sendMessage(this.message);
  }

  updatePersonalInfo() {
    this.communicationService.updatePersonalInfo(this.personalInfo);
  }
}
