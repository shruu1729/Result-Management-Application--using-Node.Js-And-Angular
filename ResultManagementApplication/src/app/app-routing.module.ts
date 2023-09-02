//Import necesssary Modules of  components for routing.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { AddRecordsComponent } from './add-records/add-records.component';
import { EditRecordsComponent } from './edit-records/edit-records.component';
// Define the routes array
const routes: Routes = [
  {path:'', component:IndexComponent},// Route for the root path ('/') that displays the IndexComponent
  {path:'teacher', component:TeacherComponent},// Route for '/teacher' path that displays the TeacherComponent
  {path:'student', component:StudentComponent},// Route for '/student' path that displays the StudentComponent
  {path:'add-record', component:AddRecordsComponent},// Route for '/add-record' path that displays the AddRecordsComponent
  {path:'edit-record/:roll_no', component:EditRecordsComponent},// Route for '/edit-record/:roll_no' path that displays the 
  {path:'index', component:IndexComponent}// Route for '/index' path that displays the IndexComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],// Configure the routes using RouterModule.forRoot() method with the 'routes' array
  exports: [RouterModule]// Export the RouterModule to make the routing functionality available to other modules
})
export class AppRoutingModule { }
