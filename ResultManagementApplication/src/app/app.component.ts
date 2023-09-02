//This is the main component of the Angular Application.
import { Component } from '@angular/core';
// The `@Component` decorator is used to define the metadata for the component. It has several properties:
// - `selector`: The CSS selector that matches the element where the component will be rendered.
// - `templateUrl`: The URL of the template file that defines the view for the component.
// - `styleUrls`: An array of URLs for the stylesheets that define the styles for the component.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ResultManagementApplication';
}
