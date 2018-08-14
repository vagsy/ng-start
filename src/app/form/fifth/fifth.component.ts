import { Component } from '@angular/core';

@Component({
  selector: 'sl-formfifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FormsFifthComponent {
  username = 'startForm';
  onSubmit(value) {
    console.dir(value);
  }
}
