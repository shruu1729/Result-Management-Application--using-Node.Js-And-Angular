//the AddRecordsComponent is an Angular component responsible for adding student records. 
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-records',
  templateUrl: './add-records.component.html',
  styleUrls: ['./add-records.component.css']
})
export class AddRecordsComponent implements OnInit {
  //The constructor of the component where the dependencies are injected.
  constructor(
    private _service:ApiserviceService,
    private _router:Router
  ) { }

  ngOnInit(): void {
  }
//Create a FormGroup to hold the form controls with their respective validators.
  addForm = new FormGroup({
    'roll_no':new FormControl('',Validators.required),
    'name':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    'date_of_birth':new FormControl('',[Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]),
    'score':new FormControl('',Validators.required),

  });
  errorMsg:any;
  succMsg:any;
  invalidIp:any;

  //Method to add a student record. It performs validation, calls the API service to add the record, and handles success/error messages.
  addStudent(){
    console.log(this.addForm.value);
    if(this.addForm.valid){
      this._service.addRecord(this.addForm.value).subscribe((res)=>{
        if(res.message == "data inserted"){
            // Navigate to the teacher component on successful record insertion
          this._router.navigate(['teacher']);
          
        }
        else{
          this.errorMsg="true";
        }
        
      });
    }
    else{
      this.invalidIp="true";
      console.log(this.invalidIp);
    }
  }
  //Method to handle the logout functionality. It sets the value "false" for the "teacherLogin" key in local storage and navigates to the "index" route.
  logout()
  {
    localStorage.setItem("teacherLogin","false");
    this._router.navigate(['index']);
  }
  //Method to navigate back to the teacher component.
  back()
  {
    this._router.navigate(['teacher']);
  }
}
