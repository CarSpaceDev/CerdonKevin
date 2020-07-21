import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { DriverService } from '../services/driver.service';
import {Driver} from '../model/driver';
import {DriverDTO} from '../model/driver.dto';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar'
import { EditDriverDetailsComponent } from '../edit-driver-details/edit-driver-details.component';
@Component({
  selector: 'app-admin-show-list-users',
  templateUrl: './admin-show-list-users.component.html',
  styleUrls: ['./admin-show-list-users.component.css']
})
export class AdminShowListUsersComponent implements OnInit {

  constructor(  public service: DriverService, private http: HttpClient,
     private dialog: MatDialog,
     private snackBar: MatSnackBar) { 
       this.service.listen().subscribe((m:any)=>{
         console.log(m);
         this.refreshDriverList();
       })
     }

listData : MatTableDataSource<any>;
displayedColumns: string[] = ['Options', 'Id', 'Email', 'DisplayName', 'Phone Number'];
@ViewChild(MatSort, { static: false }) sort: MatSort;
  ngOnInit(): void {
    this.refreshDriverList();
  }

 refreshDriverList(){
  this.service.getAllUsers()
  .subscribe( data=> {
        this.listData = new MatTableDataSource(data);
        this.listData.sort = this.sort;
    }
  );
 }
 onEdit(_id: string,driv: DriverDTO){
  console.log(driv);
   this.service.formData=driv;
 
   const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose = true;
   dialogConfig.autoFocus= true;
   dialogConfig.width="70%";
   this.dialog.open(EditDriverDetailsComponent, dialogConfig);

 }
 onDelete(authId: string){
   if(confirm('Are you sure to delete??'))
   {
     this.service.delete(authId).subscribe(res=>{
       this.refreshDriverList();
       this.snackBar.open(res.toString(),'',{
         duration:5000,
         verticalPosition: 'top'
       });
     });
   }
 }
 applyFilter(filtervalue: string){
   this.listData.filter=filtervalue.trim().toLocaleLowerCase();
 }

}
