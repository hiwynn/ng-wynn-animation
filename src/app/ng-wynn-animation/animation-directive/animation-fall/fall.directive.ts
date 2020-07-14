import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[fallShow]'
})
export class FallDirective implements OnInit {

  constructor(private el: ElementRef) {
  }

  @Input('fallShow') completeTime: number;

  ngOnInit(): void {
    this.el.nativeElement.style.animation = 'fall ' + this.completeTime / 1000 + 's';
  }

}
