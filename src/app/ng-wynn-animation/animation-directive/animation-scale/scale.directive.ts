import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[scaleShow]'
})
export class ScaleDirective implements OnInit {

  constructor(private el: ElementRef) {
  }

  @Input('scaleShow') completeTime: number;

  ngOnInit(): void {
    this.el.nativeElement.style.animation = 'scale ' + this.completeTime / 1000 + 's';
  }

}
