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
    { name: 'Utsav Trehan', avatar: 'user-icon.png'},
    {name: 'Pragati Khurana', avatar: 'user-icon.png'},
    {name: 'Sonali Khurana', avatar: 'user-icon.png'},
    {name: 'Puran Khurana', avatar: 'user-icon.png'},
    {name: 'Minu Khurana', avatar: 'user-icon.png'}
  ];
  title = 'AngularProject';
}
