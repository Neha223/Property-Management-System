import { Component } from '@angular/core';
import { Property } from './property';
import { PropertyService } from './property.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'property-management-system';
  openModel = false;
  properties: any;

  // properties = [
  //   {
  //     name: '2 BHK in Noida',
  //     size: '500 sq ft',
  //     description: 'A Budget friendly property with all amenities included. Nearby metro station find.'
  //   },
  //   {
  //     name: 'Bunglaw 1048 feet',
  //     size: '1000 sq ft',
  //     description: 'A luxurious busget friendly property for big family with all amenities & park facing.'
  //   }
  // ];

  constructor(private propertyService: PropertyService) {
    this.getProperties();
  }

  getProperties() {
    this.propertyService.getProperties().subscribe((data) => {
      console.log("all data", data);
      this.properties = data;
    })
  }

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
    // this.properties.push(property);
    this.closeModal();
    this.propertyService.addProperty(property).subscribe((result: any) =>{
      if (result.id) {
        console.log("Success");
        this.getProperties();
      }else {
        console.log("Something went wrong!");
      }
    });
  }

  deleteProperty(index: string) {
    if(confirm("Are you sure you want to delete?")) {
      this.propertyService.deleteProperty(index).subscribe((result) => {
        console.log("Successfully Deleted.");
        this.getProperties();
      });
    }
  }
  
}
