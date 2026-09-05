import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    users = [
    { id: 1, name: 'Utsav Trehan', avatar: 'user-icon.png', tasks: [
      { description: 'Complete project documentation', status: 'completed' },
      { description: 'Fix login page bug', status: 'in-progress' },
      { description: 'Update user profile feature', status: 'pending' }
    ]},
    { id: 2, name: 'Pragati Khurana', avatar: 'user-icon.png', tasks: [{ description: 'Design new landing page', status: 'in-progress' },
      { description: 'Implement search functionality', status: 'pending' }
    ]},
    { id: 3, name: 'Sonali Khurana', avatar: 'user-icon.png', tasks: [{ description: 'Conduct user testing', status: 'completed' },
      { description: 'Optimize database queries', status: 'in-progress' }
      ]},
    { id: 4, name: 'Puran Khurana', avatar: 'user-icon.png', tasks: [{ description: 'Refactor codebase', status: 'pending' },
      { description: 'Implement caching mechanism', status: 'in-progress' }
    ]},
    { id: 5, name: 'Minu Khurana', avatar: 'user-icon.png', tasks: [{ description: 'Set up CI/CD pipeline', status: 'completed' },
      { description: 'Write unit tests', status: 'in-progress' }
    ]}
  ];
  title = 'AngularProject';
  selectedUserId: number = 1;
  onSelectUser(id: number) {
    console.log('User selected:', id);
    this.selectedUserId = id;
  }

  getSelectedUser(){
    return this.users.find(user => user.id === this.selectedUserId);
  }
}
