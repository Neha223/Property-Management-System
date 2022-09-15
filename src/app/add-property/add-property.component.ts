import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Property } from '../property';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @Input() displayStyle = 'none';

  @Output() close = new EventEmitter<boolean>();

  @Output() property = new EventEmitter<any>();

  propertyForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    size: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.close.emit(false);
  }

  onSubmit() {
    this.property.emit(this.propertyForm.value);
  }

}
