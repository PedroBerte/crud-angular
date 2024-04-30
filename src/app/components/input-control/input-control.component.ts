import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrl: './input-control.component.css',
})
export class InputControlComponent {
  @Input() label: string = '';
  @Input() control: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() public form: FormGroup = new FormGroup({});
}
