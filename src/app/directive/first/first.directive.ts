import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[first]'
})
export class FirstDirective {
  @HostBinding() innerText = 'Hello, Everyone!';
}
