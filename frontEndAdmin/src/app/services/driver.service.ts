import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from "../model/driver";
import { Observable, of, throwError } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import {Subject} from 'rxjs';
const baseUrlDriver = 'http://localhost:3000/driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  
  constructor(    private router: Router,
    public ngZone: NgZone,
    private http: HttpClient) {
    }
    formData: Driver;
    getAllUsers(): Observable<Driver[]>{
      return this.http.get<Driver[]>('http://localhost:3000/driver/showAll');
    }
    
     get(uid){
       console.log(`${baseUrlDriver}/${uid}`);
      return this.http.get(`${baseUrlDriver}/${uid}`);
     }
    
     update(uid, driv: Driver){
       console.log('helo');
       console.log(uid, driv);
       return this.http.put(`${baseUrlDriver}/${uid}`, driv);
     }
    
     delete(uid){
       console.log(uid);
      return this.http.delete(`${baseUrlDriver}/${uid}`);
    }
    findId(uid){
      console.log(`${baseUrlDriver}/${uid}`);
      return this.http.get(`${baseUrlDriver}/${uid}`);
    }

    private _listners = new Subject<any>();
    listen(): Observable<any>{
      return this._listners.asObservable();
    }
    filter(filterBy: string){
      this._listners.next(filterBy)
    }
}
