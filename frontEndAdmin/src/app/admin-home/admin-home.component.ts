import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DriverService } from '../services/driver.service';
import { User } from '../model/user';
import { unescapeIdentifier } from '@angular/compiler';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  uid: string;
  lst: any;

  constructor( public driver: DriverService, public _authService: AuthService, private http: HttpClient) { }
  listuser: any;

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
 
  this.driver.getAllUsers()
  .subscribe
  (
    data=>
    {
     
        this.listuser = data;
    
    }

  );
}
search(){
  //let params1 = new HttpParams().set('uid',this.uid);



}
}
