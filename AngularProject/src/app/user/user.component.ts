import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  dummyUser = [
    { name: 'Utsav Trehan', avatar: 'user-icon.png'},
    {name: 'Pragati Khurana', avatar: 'user-icon.png'},
    {name: 'Sonali Khurana', avatar: 'user-icon.png'},
    {name: 'Puran Khurana', avatar: 'user-icon.png'},
    {name: 'Minu Khurana', avatar: 'user-icon.png'}
  ];

  selectedUser = this.dummyUser[0];
  get imagePath(){
    return 'assets/' + this.selectedUser.avatar;
  }

//dynamic data binding is used to bind the selectedUser property to the template. The selectedUser property is an object that contains the name and avatar of the user, and it is used to display the user's name and avatar in the template. 
// The selectedUser property is initialized with a default value of 'Pragati Khurana' and 'user-icon.png', which will be displayed in the template when the component is rendered.
//string interpolation is used to display the value of the selectedUser property in the template. The value of selectedUser is set to 'Pragati Khurana' in the component class, and it will be displayed in the template where {{ selectedUser }} is used.
//property binding is used to bind the image source to the src attribute of the img element. The value of the src attribute is set to 'assets/user-icon.png', which is the path to the user icon image in the assets folder.
onSelectUser(){
  const randomIndex = Math.floor(Math.random() *this.dummyUser.length);
  this.selectedUser = this.dummyUser[randomIndex];
  console.log('User selected:', this.selectedUser);
}
}

//zone.js is a library that helps Angular to know when to update the view. 
// It monkey-patches asynchronous operations like setTimeout, promises, and DOM events to notify Angular when they complete. 
// This allows Angular to automatically detect changes and update the view accordingly. 
// In this case, when the onSelectUser() method is called, it updates the selectedUser property, and Angular's change detection mechanism will automatically update the view to reflect the new selected user.

