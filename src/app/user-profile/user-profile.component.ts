import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User = 
    new User("Doe", "John", 30, "To be or not to be", 'https://randomuser.me/api/portraits/lego/2.jpg')
  ;
  /*ngIf */
  ageView: boolean = false;

  /*condition pour afficher l'age*/
  viewAge()
  {
    this.ageView = !this.ageView;
  }
  constructor() { }

  ngOnInit(): void {}

 

}
