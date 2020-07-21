import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[waveShow]'
})
export class WaveDirective implements OnInit {

  constructor(private el: ElementRef) {
  }

  @Input('waveShow') completeTime: number;

  ngOnInit(): void {
    this.el.nativeElement.style.animation = 'wy-wave ' + 1 + 's';
    this.el.nativeElement.style.animationDelay = this.completeTime / 1000 + 's';
  }

}
