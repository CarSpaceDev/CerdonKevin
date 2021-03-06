import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';
@Component({
  selector: 'app-driver-registration',
  templateUrl: './driver-registration.component.html',
  styleUrls: ['./driver-registration.component.css']
})
export class DriverRegistrationComponent implements OnInit {
  home: firebase.User;
  user: firebase.User;
  driver=[];
  id: any;

  constructor(public auth: AuthService,
    private router: Router, private firestore: AngularFirestore
  ) { }

  ngOnInit() {

 
  }
 onSubmit(form: NgForm){
   //console.log(this.data.authId);
   this.id=sessionStorage.getItem("authId");
   console.log(this.id);
console.log(form);
 }
}
