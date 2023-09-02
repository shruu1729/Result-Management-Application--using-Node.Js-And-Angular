// the EditRecordsComponent is an Angular component responsible for editing records. 
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-edit-records',
  templateUrl: './edit-records.component.html',
  styleUrls: ['./edit-records.component.css']
})
export class EditRecordsComponent implements OnInit {
  //Define a FormGroup to hold the form controls with their respective validators.
  editForm = new FormGroup({
    'roll_no':new FormControl('',Validators.required),
    'name':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    'date_of_birth':new FormControl('',[Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]),
    'score':new FormControl('',Validators.required),
    });
  constructor(private _router:Router, private _route:ActivatedRoute, private _service:ApiserviceService) { }
//The constructor of the component where the dependencies are injected.
  paramId:any;// Variable to hold the value of the 'roll_no' parameter from the route.
  ngOnInit(): void {
     // Get the roll_no parameter from the route snapshot
    this.paramId = this._route.snapshot.paramMap.get('roll_no');
      // Fetch the single data based on the roll_no
    this._service.getSingleDatas(this.paramId).subscribe((res)=>{
      console.log(res);
        // Populate the form controls with the fetched data
      this.editForm.patchValue({
        roll_no:res.data[0].roll_no,
        name:res.data[0].name,
        date_of_birth:res.data[0].date_of_birth,
        score:res.data[0].score
      })
    });

  }

  successMsg:any;
  errorMsg:any;
    // Method to update the record
    //Method to update the record based on the form data. It performs validation, calls the API service to update the record, and handles the success/error messages.
  updateRecord(){
    if(this.editForm.valid){
      this._service.updateRecord(this.editForm.value,this.paramId).subscribe((res)=>{
        
        if(res.message == 'data updated successfully'){
           // Navigate to the teacher component on successful update
          this._router.navigate(['teacher']);
        }
        else{
          this.errorMsg="true";
        }
      });
    }
    else{
      this.successMsg="true";
    }
  }
 // Method to handle the logout functionality. It sets the value "false" for the
  logout()
  {
    localStorage.setItem("teacherLogin","false");
    this._router.navigate(['index']);
  }
    // Method to navigate back to the teacher component
  back()
  {
    this._router.navigate(['teacher']);
  }

}
