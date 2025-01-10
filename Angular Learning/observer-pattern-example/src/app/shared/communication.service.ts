import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { PersonalInfo } from './Models/PersonalInfo';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private messageSource = new Subject<string>();
  message$ = this.messageSource.asObservable();

  private personalInfoSource = new BehaviorSubject<PersonalInfo>(
    new PersonalInfo('', '', '', 0, 0, 0, '', '')
  );
  personalInfo$ = this.personalInfoSource.asObservable();


  updatePersonalInfo(personalInfo: PersonalInfo) {
    this.personalInfoSource.next(personalInfo);
  }
  
  sendMessage(message: string) {
    this.messageSource.next(message);
  }
}
