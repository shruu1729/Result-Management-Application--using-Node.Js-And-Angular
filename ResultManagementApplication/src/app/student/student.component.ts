import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
//The constructor injects the Router and ApiserviceService dependencies.
  constructor(private _router:Router,
    private _service:ApiserviceService){}


    readData:any;// Variable to store the retrieved data
    avail:any;// Variable to indicate if data is available
    err=false; // Variable to indicate if an error occurred
  ngOnInit(): void {
    // Check if the student is logged in
    // Checks if the student is logged in by checking the value of the studentLogin key in the localStorage. If not logged in, it redirects to the index page.
    if(localStorage.getItem("studentLogin")!="true"){
      this._router.navigate(['index']);// Redirect to the index page if not logged in
    }
  }
// FormGroup to handle the search form
//Defines a FormGroup to handle the search form. It consists of two form controls: 'roll_no' and 'name', with the required and validation rules specified.
  searchForm =  new FormGroup({
    'roll_no':new FormControl('',Validators.required),
    'name':new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')])
  });
  
   // Method to search for student result
   //Method to search for student results. It checks if the search form is valid, retrieves the values of roll_no
  searchResult(){
    if(this.searchForm.valid){
      let roll_no=this.searchForm.controls['roll_no'].value;
      let name = this.searchForm.controls['name'].value
      //console.log(roll_no, name);
      this._service.getSingleData(roll_no, name).subscribe((res)=>{
        
        if(res.message == "no such data exists in database"){
          // Set err to true to display error message
          this.err=true;
        }
        else{
          this.avail = "true";// Set avail to "true" to indicate data availability
          console.log(res);
          this.readData = res.data;  // Assign the retrieved data to the readData variable
          this.err=false;  // Set err to false to clear any previous error message    
        }
      });
    }
    this.readData=null;// Clear the readData variable
    //this.avail="false";
  }

  logout()
  {
    localStorage.setItem("studentLogin","false");// Set studentLogin value to false in localStorage
    this._router.navigate(['index']);
  }
}
