import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

import { User } from '../user';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor( public _authService: AuthService) { }
  listuser: User;
  ngOnInit() {
  // this._authService.getAllUsers()
  //   .subscribe
  //   (
  //     data=>
  //     {
  //         this.listuser = data;
      
  //     }

  //   );
  // }

}
 getUsers(){
  this._authService.getAllUsers()
  .subscribe
  (
    data=>
    {
     
        this.listuser = data;
    
    }

  );
}
}
