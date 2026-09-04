import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser: { name: string, avatar: string } = {
    name: 'Pragati Khurana', avatar: 'user-icon.png'
  };

}

//string interpolation is used to display the value of the selectedUser property in the template. The value of selectedUser is set to 'Pragati Khurana' in the component class, and it will be displayed in the template where {{ selectedUser }} is used.
//property binding is used to bind the image source to the src attribute of the img element. The value of the src attribute is set to 'assets/user-icon.png', which is the path to the user icon image in the assets folder.