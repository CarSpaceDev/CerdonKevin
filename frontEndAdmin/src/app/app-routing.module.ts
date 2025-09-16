import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DriverRegistrationComponent } from './driver-registration/driver-registration.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AdminShowListUsersComponent } from './admin-show-list-users/admin-show-list-users.component';
import { EditDriverDetailsComponent } from './edit-driver-details/edit-driver-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin-home', pathMatch: 'full' },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'userprofile', component: UserProfileComponent },
  { path: 'driverregistration', component: DriverRegistrationComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'adminhome/uid', component: AdminHomeComponent },
  { path: 'adminshowlistusers', component: AdminShowListUsersComponent},
  { path: 'editdriverdetails', component: EditDriverDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
