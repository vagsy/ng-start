import { Component } from '@angular/core';

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.css']
})
export class DirectiveSixthComponent {
  context = { message: 'Hello ngOutletContext!', $implicit: 'Hello, Semlinker!' };
}
