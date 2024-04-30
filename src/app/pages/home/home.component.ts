import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private formBuilder: FormBuilder) {}

  gameForm = this.formBuilder.group({
    name: [''],
    price: [''],
    category: [''],
    description: [''],
  });
}
