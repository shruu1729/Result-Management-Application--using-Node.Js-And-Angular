// Index Component is an Angular Component that represents the index page.
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
//The constructor of the component.
  constructor() { }

  ngOnInit(): void {
    // Lifecycle hook that is called when the component is initialized
  
  }
   // Method to set the teacherLogin value to "true" in localStorage
  // Method to handle the teacher login. It sets the value "true" for the key "teacherLogin" in the localStorage.
  teacherLogin(){
    localStorage.setItem("teacherLogin","true");
  }
// Method to set the studentLogin value to "true" in localStorage
//Method to handle the student login. It sets the value "true" for the key "studentLogin" in the localStorage.
  studentLogin(){
    localStorage.setItem("studentLogin","true");
  }
}
