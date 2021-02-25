import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppAlphabetOnly]'
})
export class AppAlphabetOnlyDirective {
  key: any;
  // tslint:disable-next-line: typedef
  @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent) {
    // tslint:disable-next-line: deprecation
    this.key = event.keyCode;
    if (
      (this.key >= 15 && this.key <= 63 && this.key !== 32) ||
      this.key >= 123 ||
      (this.key >= 96 && this.key <= 110)
    ) {
      event.preventDefault();
    }
  }
}
