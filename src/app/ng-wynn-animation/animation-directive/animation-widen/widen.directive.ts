import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[widenShow]'
})
export class WidenDirective implements OnInit {

  constructor(private el: ElementRef) {
  }

  @Input('widenShow') completeTime: number;

  ngOnInit(): void {
    this.el.nativeElement.style.animationName = 'wy-widen, ' + 'wy-color';
    this.el.nativeElement.style.animationDuration = this.completeTime / 1000 + 's, '+  (this.completeTime / 1000-1+3) + 's';
  }

}
