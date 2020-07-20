import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DriverRegistrationComponent } from './driver-registration/driver-registration.component';
import { LotOwnerRegistrationComponent } from './lot-owner-registration/lot-owner-registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { enableProdMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AuthService } from './services/auth.service';
import { AdminShowListUsersComponent } from './admin-show-list-users/admin-show-list-users.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { EditDriverDetailsComponent } from './edit-driver-details/edit-driver-details.component';
const  firebaseConfig= {
         apiKey: "AIzaSyCd7ZohcO9zwIJ6UWnVN_xUi-bh27Wh0i4",
         authDomain: "carspace-alpha.firebaseapp.com",
        databaseURL: "https://carspace-alpha.firebaseio.com",
        projectId: "carspace-alpha",
        storageBucket: "carspace-alpha.appspot.com",
         messagingSenderId: "642931615097",
         appId: "1:642931615097:web:5973d05e4ff8c189807ba8",
         measurementId: "G-WYEZC528F2"

}
const routes: Routes = [
  { path: 'userprofile', component: UserProfileComponent },
  { path: 'driverregistration', component: DriverRegistrationComponent },
  { path: '', component: NavigationComponent },
  { path: 'adminhome', component: AdminHomeComponent },
  { path: 'adminhome/uid', component: AdminHomeComponent },
  { path: 'adminshowlistusers', component: AdminShowListUsersComponent},
 


];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DriverRegistrationComponent,
    LotOwnerRegistrationComponent,
    UserProfileComponent,
    AdminHomeComponent,
    AdminShowListUsersComponent,
    EditDriverDetailsComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    RouterModule.forRoot(routes)
  ],
  exports: [  MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule ],
  
  providers: [ AuthService ],
  bootstrap: [AppComponent],
  entryComponents:[EditDriverDetailsComponent]

})
export class AppModule { }
