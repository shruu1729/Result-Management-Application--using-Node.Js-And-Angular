// importing important modules which required in application
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AddRecordsComponent } from './add-records/add-records.component';
import { IndexComponent } from './index/index.component';
import { EditRecordsComponent } from './edit-records/edit-records.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import {ReactiveFormsModule} from '@angular/forms';
// The `@NgModule` decorator is used to define the metadata for the module. It has several properties:

@NgModule({
  // Declaring all the components used in the application
  // - `declarations`: An array of components, directives, and pipes that belong to this module.
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    AddRecordsComponent,
    IndexComponent,
    EditRecordsComponent
  ],
  // Importing all the required modules .
  // - `imports`: An array of modules that this module depends on.
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  // Providing the service used in the Application.
  // - `providers`: An array of services that are available to all components declared in this module.
  providers: [ApiserviceService],
  // Bootstrapping the main components of the application.
  // - `bootstrap`: The main component of the application that is bootstrapped when the module is loaded.
  // The `AppComponent` is the main component of the application. It has a property `title` that is used to display the title of the application.
  bootstrap: [AppComponent]
})
export class AppModule { }
