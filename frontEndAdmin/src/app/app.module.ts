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

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
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
import {MatPaginatorModule} from '@angular/material/paginator'; 
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
    MatPaginatorModule
  ],
  exports: [  MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatPaginatorModule ],
  
  providers: [ 
    AuthService,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
