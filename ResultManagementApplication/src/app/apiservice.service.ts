//In  this code, the ApiserviceService is an Angular service that provides methods to interact with an API.
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
//The @Injectable decorator marks the class as an injectable service, and the providedIn: 'root' option registers the service with the root injector.
@Injectable({
  providedIn: 'root'
})

export class ApiserviceService {
  //The constructor injects the HttpClient service into the ApiserviceService for making HTTP requests.
  constructor(
    private _http:HttpClient
  ) { }
  
  //connecting to API
  //Defines the base URL of the API.
  apiUrl = 'http://localhost:3000/students';

  //get all data
  //Method to retrieve all data from the API. It returns an Observable that emits the API response.
  getAllData():Observable<any>{
    return this._http.get(this.apiUrl);
  }
  //delete a record
  // Method to delete a record by ID. It takes the id parameter and returns an Observable that emits the API response.
  deleteRecord(id:any):Observable<any>{
    let roll = id;
    return this._http.delete(`${this.apiUrl}/${roll}`);
  }
  //add a new record
  //Method to add a new record. It takes the data parameter and returns an Observable that emits the API response.
  addRecord(data:any):Observable<any>{
    return this._http.post(`${this.apiUrl}`, data);
  }
  //get a single data
  //Method to retrieve a single data by ID and name. It takes id and name parameters and returns an Observable that emits the API response.
  getSingleData(id:any, name:any):Observable<any>{
    let roll_no=id;
    let studentName=name;
    //console.log(roll_no, studentName);
    let params={roll_no,studentName}
    return this._http.get(`${this.apiUrl}/${roll_no}/${studentName}`);
  }
  //update records
  //Method to update a record by ID. It takes the data and id parameters and returns an Observable that emits the API response.
  updateRecord(data:any, id:any):Observable<any>{
    let roll_no=id;
    return this._http.put(`${this.apiUrl}/${roll_no}`, data);
  }
// Get the single data by id.
//Method to retrieve a single data by ID. It takes the id parameter and returns an Observable that emits the API response.
  getSingleDatas(id:any):Observable<any>{
    let roll_no=id;
    return this._http.get(`${this.apiUrl}/${roll_no}`);
  }
}
