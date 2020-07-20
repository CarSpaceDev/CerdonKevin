import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Driver} from '../model/driver';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar'
import { DriverService } from '../services/driver.service';
import { subscribeOn } from 'rxjs/operators';
@Component({
  selector: 'app-edit-driver-details',
  templateUrl: './edit-driver-details.component.html',
  styleUrls: ['./edit-driver-details.component.css']
})
export class EditDriverDetailsComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<EditDriverDetailsComponent>,
    private service: DriverService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  onClose(){
    this.dialogbox.close();
    this.service.filter('Register Click')
  }
  onSubmit(_id,form: NgForm){
    this.service.update(_id,form.value).subscribe(res=>{
      this.snackBar.open(res.toString(),'Sucessfuly Updated',{
        duration:5000,
        verticalPosition:'top'
      });
    });
  }
}
