import { Component } from '@angular/core';
import { Property } from './property';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'property-management-system';
  openModel = false;

  properties = [
    {
      name: '2 BHK in Noida',
      size: '500 sq ft',
      description: 'A large phone with one of the best screens'
    },
    {
      name: 'Bunglaw 1048 feet',
      size: '1000 sq ft',
      description: 'A great phone with one of the best cameras'
    }
  ];

  displayStyle = "none";
  
  openModal() {
    this.displayStyle = "block";
    this.openModel = true;
  }

  closeModal() {
    this.displayStyle = "none";
    this.openModel = false;
  }

  addProperty(property: Property) {
    console.log("property to be added", property);
    this.properties.push(property);
    this.closeModal();
  }

  deleteProperty(index: number) {
    if(confirm("Are you sure you want to delete?")) {
      this.properties.splice(index, 1);
    }
  }
  
}
