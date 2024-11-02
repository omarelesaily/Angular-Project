import { Component, OnInit  } from '@angular/core';
import { User, UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS,HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from '../../interceptors/error.interceptor';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }  // Register the interceptor in the component
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit  {
  users: User[] = [];

  constructor(private userService: UserService,private http: HttpClient) {
    this.testApiRequest();
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
  testApiRequest() {
    // Trigger an HTTP request to test error handling
    this.http.get('https://api.nonexistent.com/data').subscribe(
      data => console.log(data),
      error => console.error('Error caught in component:', error)
    );
  }
}
