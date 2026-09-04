import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    users = [
    { id: 1, name: 'Utsav Trehan', avatar: 'user-icon.png'},
    { id: 2, name: 'Pragati Khurana', avatar: 'user-icon.png'},
    { id: 3, name: 'Sonali Khurana', avatar: 'user-icon.png'},
    { id: 4, name: 'Puran Khurana', avatar: 'user-icon.png'},
    { id: 5, name: 'Minu Khurana', avatar: 'user-icon.png'}
  ];
  title = 'AngularProject';
  onSelectUser(id: number) {
    console.log('User selected:', id);
  }
}
