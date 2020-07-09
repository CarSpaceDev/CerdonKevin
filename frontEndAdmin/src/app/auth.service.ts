import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
// import { User } from './user.model';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from "./user";
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
/*Observe the AuthState
The most important element this feature is being able to react to changes to the user’s authentiaction state.
 When logged-out, will have an Observable of null. When logged-in, we want to switchMap to an Observable of 
 the user’s profile document in Firestore. This is equivilent joining custom data and we can set this up in 
 the constructor. */

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<any>;
  userData: any;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
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
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  createUsers(user: User) {
    console.log(user);
    return this.http.post(`http://localhost:3000/user/requestUserInfo`,user).
        pipe(
           map((data: any) => {
            
             console.log("data here");
             console.log(data);
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
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
        let  userData: User = {
          uid: result.user.uid,
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL
         }

        console.log("user data ");

      
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
          // console.log(userData.email);
          // console.log(userData.uid);
        
        }
        else{
        console.log(result.user.displayName);
        console.log(result.user.uid);
          this.router.navigate(['driverregistration']);
         }
        })
      // this.updateUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }


   private updateUserData(user){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

     const userData: User = {
      uid: user.authId,
       email: user.email,
       displayName: user.displayName,
       photoURL: user.photoURL
     }
 
   
 
     return userRef.set(userData, 
      { merge: true
       })

   }

   get isLoggedIn(): boolean {
    const user = this.userData
    return (user !== null) ? true : false;
  }

   async signOut(){
     await this.afAuth.signOut();
     this.router.navigate(['/']);
   }
   getUserState() {
    return this.afAuth.authState;
  }
 async SignIn(user,pasword){
  console.log("the is a test");
 }

 getAllUsers(): Observable<any>{
   return this.http.get("http://localhost:3000/user/showAll")
 }

}
