import { Component,computed,EventEmitter,input,Input,Output,signal } from '@angular/core';

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
  @Input({required: true}) avatar!: string;
  //required: true is used to indicate that the avatar input property is required and must be provided by the parent component.
  @Input({required: true}) name!: string;

  @Input() id! : number;
  @Output() select = new EventEmitter();
    get imagePath(){
    return 'assets/' + this.avatar;
  }

//   avatar = input.required<string>();
//   name =input.required<string>();
//   imagePath = computed(() => 'assets/' + this.avatar());
  ///input is a decorator that is used to define an input property for a component. 
  // It allows the parent component to pass data to the child component. 
  // In this case, the avatar input property is defined as a string, and it is used to bind the avatar image source in the template.



  //selectedUser = this.dummyUser[0];
//selectedUser = signal(this.dummyUser[0]);
//signal is a new feature in Angular that allows you to create reactive state in your components.
//It is similar to the useState hook in React. 
//The signal function takes an initial value and returns a signal object that can be used to read and update the state. 
// In this case, the selectedUser signal is initialized with the first user in the dummyUser array.
//imagePath = computed(() => 'assets/' + this.selectedUser().avatar);



//   get imagePath(){
//     return 'assets/' + this.selectedUser().avatar;
//     //this.selectedUser().avatar; getter is used to compute the value of the imagePath property based on the selectedUser signal.
//   }

//dynamic data binding is used to bind the selectedUser property to the template. The selectedUser property is an object that contains the name and avatar of the user, and it is used to display the user's name and avatar in the template. 
// The selectedUser property is initialized with a default value of 'Pragati Khurana' and 'user-icon.png', which will be displayed in the template when the component is rendered.
//string interpolation is used to display the value of the selectedUser property in the template. The value of selectedUser is set to 'Pragati Khurana' in the component class, and it will be displayed in the template where {{ selectedUser }} is used.
//property binding is used to bind the image source to the src attribute of the img element. The value of the src attribute is set to 'assets/user-icon.png', which is the path to the user icon image in the assets folder.
onSelectUser(){
    this.select.emit(this.id);
//   const randomIndex = Math.floor(Math.random() *this.dummyUser.length);
//   this.selectedUser.set(this.dummyUser[randomIndex]);
  //set can be used to update the value of a signal. 
  // In this case, the selectedUser signal is updated with a random user from the dummyUser array when the onSelectUser() method is called.
  //this.selectedUser = this.dummyUser[randomIndex];
  //console.log('User selected:', this.selectedUser);
}
}

//zone.js is a library that helps Angular to know when to update the view. 
// It monkey-patches asynchronous operations like setTimeout, promises, and DOM events to notify Angular when they complete. 
// This allows Angular to automatically detect changes and update the view accordingly. 
// In this case, when the onSelectUser() method is called, it updates the selectedUser property, and Angular's change detection mechanism will automatically update the view to reflect the new selected user.

