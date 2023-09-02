//this component handles the teacher page functionality, including retrieving data, logging out, and deleting records.
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
//The constructor injects the Router and ApiserviceService dependencies.
  constructor(
    private _router:Router,
    private _service:ApiserviceService
  ) { }
  readData:any;// Variable to store the retrieved data
  errorMsg:any;// Variable to store error messages


  ngOnInit(): void {
    // Check if the teacher is logged in
    //Checks if the teacher is logged in by checking the value of the teacherLogin key in the localStorage. If not logged in, it redirects to the index page.
    if(localStorage.getItem("teacherLogin")!="true"){
      this._router.navigate(['index']);// Redirect to the index page if not logged in
    }
    // Retrieve all data from the API
   // Calls the getAllData() method from the ApiserviceService to retrieve all data from the API. The response is subscribed to using the subscribe() method, and the retrieved data is assigned to the readData variable.
    this._service.getAllData().subscribe((res)=>{
      console.log(res);
      this.readData = res.data;
      this.readData = res.data; // Assign the retrieved data to the readData variable

    });
  }
  //Method to log out the teacher. It sets the value of teacherLogin to "false" in the localStorage and redirects to the index page.
  logout()
  {
    localStorage.setItem("teacherLogin","false");//Set teacherLogin value to false in localStorage
    this._router.navigate(['index']);// Redirect to the index page
  }

  //Method to delete a record. It calls the deleteRecord() method from the ApiserviceService to delete the record with the provided roll number. The response is subscribed to, and if the deletion is successful, the page is reloaded. Otherwise, the errorMsg variable is set to true to display an error message.
  deleteRecord(roll:any){
    this._service.deleteRecord(roll).subscribe((res)=>{
      if(res.message =="deleted successfully"){
        window.location.reload();// Reload the page after successful deletion
      }
      else{
        this.errorMsg=true;/// Set the errorMsg variable to true to display error message
      }
      
    });
  }

}
