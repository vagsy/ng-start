import { Directive, HostBinding, HostListener, Input, Attribute } from '@angular/core';

@Directive({
  selector: '[fourth]'
})
export class FourthDirective {
  @Input() fourth: string;

  @HostBinding() get innerText() {
      return this.fourth;
  }

  @HostListener('click',['$event'])
  onClick(event) {
      this.fourth = 'Clicked!';
      console.dir(event);
  }

  constructor(@Attribute('author') public author: string) {
      console.log(author);
  }

}
