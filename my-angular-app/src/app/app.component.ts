import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgIf,NgTemplateOutlet,NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault,NgStyle,NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // islogedIn: boolean = false;
  // userName: string = 'Dinusha Madhuranga';

//   isAdmin : boolean = false;
//   isMember : boolean = true;
//   isGuest: boolean = false;


// loginCount : number = 0;
// userRole : string ="member";
// countLoginAttemps(){
//   this.loginCount ++;
//   console.log(this.loginCount);
// }

  // users: Array<string> = ['Dinusha','Madhuranga','Premarathna']

  // userObj : Array<any> =[
  //   {id:1,name:'Dinusha',email:'dinusha@gmail.com'},
  //   {id:2,name:'Madhuranga',email:'madhuranga@gmail.com'},
  //   {id:3,name:'Premarathna',email:'preme@gmail.com'},
  //   {id:4,name:'Ranga',email:'ranga@gmail.com'}
    
  // ]
  // constructor() {
  //   console.log(this.userObj.length)
  // }
  // addNewUser(){
  //   let user= {id:5 , name:'user5',email:'user5@gmail.com'}
  //   this.userObj.push(user);
  // }
  // onDelete(user:object){
  //   let index = this.userObj.indexOf(user);
  //   this.userObj.splice(index,1);
  // }

  // onDelete(index:number) {
  //   this.userObj.splice(index,1);
  // }

  //  userRole: string = 'Edir';
  isLoggedIn : boolean = false;
}