import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[second]'
})
export class SecondDirective {
  @Input() second: string;
  @HostBinding() get innerText() {
    return this.second;
  }
}
