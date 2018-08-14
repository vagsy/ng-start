import { Component } from '@angular/core';

@Component({
  selector: 'sl-formsixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.css']
})
export class FormsSixthComponent {
  username = 'startForm';
  onSubmit(value) {
    console.dir(value);
  }
}
