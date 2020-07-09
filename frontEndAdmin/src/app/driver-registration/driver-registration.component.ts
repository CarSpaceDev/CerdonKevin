import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-driver-registration',
  templateUrl: './driver-registration.component.html',
  styleUrls: ['./driver-registration.component.css']
})
export class DriverRegistrationComponent implements OnInit {
  home: firebase.User;
  user: firebase.User;
  driver=[];
  data;

  constructor(public auth: AuthService,
    private router: Router, private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.auth.getUserState()
      .subscribe( home => {
        this.home = home;
      })
    this.auth.getUserState()
    .subscribe( user => {
      this.user = user
    })
    this.firestore
    .collection('driverList')
    .ref.get()
    .then((snapshot) =>{
        snapshot.forEach((doc) =>{
          this.driver.push(doc.data());
        });
    });
 
  }
  updateProfileDriver(userDetails){
    this.data ={
        firstName: userDetails.firstName,
        lastName: userDetails.firstName,
        licenseNumber: userDetails.firstName
    };
    this.firestore
    .collection('driverList')
    .doc(userDetails).set(this.data)
  }
}
