import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[third]'
})
export class ThirdDirective {
  @Input() third: string;

  @HostBinding() get innerText() {
    return this.third;
  }

  @HostListener('click',['$event'])
    onClick(event) {
      this.third = 'Clicked!';
    }
}
