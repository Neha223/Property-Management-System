import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from './property';
import { Airtable, Base } from 'ngx-airtable';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private base: Base;

  constructor(private readonly airtable: Airtable) { 
    this.base = this.airtable.base('appgaci8PIt2mrCnH');
  }

  getProperties(): Observable<Property[]> {
    return this.base.
        table({
          tableName: 'property'
        }).select({
          fields: ['description','name','size'],
          maxRecords: 10
        }).all();
  }

  addProperty(property: Property): Observable<Property[]> {
    return this.base.table({
      tableName: 'property'
    }).create({fields: property});
  }

  deleteProperty(id: string): Observable<Property[]> {
    console.log("delete==", id);
    return this.base.table({
      tableName: 'property'
    }).destroy(id);
  }
}
