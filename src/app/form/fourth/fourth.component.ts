import { Component } from '@angular/core';

@Component({
  selector: 'sl-formfourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FormsFourthComponent {
  username = 'startForm';
  onSubmit(value) {
    console.dir(value);
  }
}
