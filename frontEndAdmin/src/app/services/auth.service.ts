import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
// import { User } from './user.model';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, authState } from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { User } from "../model/user";

import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { DriverDTO } from '../model/driver.dto';
/*Observe the AuthState
The most important element this feature is being able to react to changes to the user’s authentiaction state.
 When logged-out, will have an Observable of null. When logged-in, we want to switchMap to an Observable of 
 the user’s profile document in Firestore. This is equivilent joining custom data and we can set this up in 
 the constructor. */
 const baseUrl = 'http://localhost:3000/User';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<any>;
  userData: any;

  
  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private router: Router,
    public ngZone: NgZone,
    private http: HttpClient
  ) 

  {
    //get the auth state, then fetch the firestore user document or return null
    // this.user$ = this.afAuth.authState.pipe(
    //   switchMap(user => {
    //     //loged in
    //     if (user) {
    //       this.userData = user;
    //       localStorage.setItem('user', JSON.stringify(this.userData));
    //       JSON.parse(localStorage.getItem('user'));
    //       console.log( JSON.parse(localStorage.getItem('user')));
    //       return this.afs.doc<any>('user/${user.uid}').valueChanges();
    //     }
    //     else{
    //       //logged out
    //       localStorage.setItem('user', null);
    //       JSON.parse(localStorage.getItem('user'));
    //       return of(null);
    //     }
    //   })
    // );

   }

 

   GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  createUsers(user: User) {
  
    // return this.http.post(`http://localhost:3000/user/requestUserInfo`,user)

    return this.http.post(`${baseUrl}/register`,user).   
      pipe(
           map((data: User) => {
             //console.log(data);
             data.authId = data.authId
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        )
    }
 

  //  async googleSignIn(){
  //    const provider = new auth.GoogleAuthProvider();
  //    const credential = await this.afAuth.signInWithPopup(provider);

  //    return this.updateUserData(credential.user);
  //  }
  AuthLogin(provider) {
    return signInWithPopup(this.auth, provider)
    .then((result) => {
       this.ngZone.run(() => {
        let  userData: User = {
          authId: result.user.uid,
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL
         }
        var aId= sessionStorage.setItem("authId", result.user.uid );
        //  console.log(userData.authId);
        //  this.http.post<User>(`${baseUrl}/find`,{"authId": userData.authId}).subscribe( data=> {
        //   console.log(data.authId );
          
          
         
        //    });
   
      
           this.createUsers(userData).subscribe((res)=>{ 
          });
        
        


    

        if(result.user.email === "kevin@bsit.usjr.edu.ph")
        {
      
          

        //   this.http.post('http://localhost:3000/user/requestUserInfo',{userData}).subscribe(res => {
        //    userData.uid= result.user.uid;
        //    userData.email = result.user.email;
        //    userData.displayName = result.user.displayName;
        //     userData.photoURL = result.user.photoURL;
        //     console.log("helo");
        //     console.log(userData);
          
        // // this.updateUserData(result.user)
       
        
        // })
          this.router.navigate(['adminhome']);
          // console.log(userData);
        
          // console.log(userData.uid);
        
        }
        else{
     
          
       
          this.router.navigate(['driverregistration']);
         }
        })
      // this.updateUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }


   async signOut(){
     await signOut(this.auth);
     this.router.navigate(['/']);
   }
   getUserState() {
    return authState(this.auth);
  }
 async SignIn(user,pasword){
  console.log("the is a test");
 }

//  getAllUsers(): Observable<any>{
//    return this.http.get("http://localhost:3000/user/showAll")
//  }
//  getAllUsers(): Observable<any>{
//   return this.http.get(`${baseUrl}/showAll`);
// }


}
