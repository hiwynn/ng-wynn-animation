import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[rotateShow]'
})
export class RotateDirective implements OnInit {

  constructor(private el: ElementRef) {
  }

  @Input('rotateShow') completeTime: number;

  ngOnInit(): void {
    this.el.nativeElement.style.animation = 'wy-rotate ' + this.completeTime / 1000 + 's';
  }

}
