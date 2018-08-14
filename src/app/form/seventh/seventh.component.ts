import { Component } from '@angular/core';

@Component({
  selector: 'sl-formseventh',
  templateUrl: './seventh.component.html',
  styleUrls: ['./seventh.component.css']
})
export class FormsSeventhComponent {
  username = 'startForm';
  onSubmit(value) {
    console.dir(value);
  }
}
