import { NgModule } from '@angular/core';

import { ScaleDirective } from "./animation-directive/animation-scale/scale.directive";
import { RotateDirective } from "./animation-directive/animation-rotate/rotate.directive";
import { FallDirective } from "./animation-directive/animation-fall/fall.directive";
import { WidenDirective } from "./animation-directive/animation-widen/widen.directive";
import { WaveDirective } from "./animation-directive/animation-wave/wave.directive";

@NgModule({
  declarations: [
    ScaleDirective,
    RotateDirective,
    FallDirective,
    WidenDirective,
    WaveDirective
  ],
  exports: [
    ScaleDirective,
    RotateDirective,
    FallDirective,
    WidenDirective,
    WaveDirective
  ],
})
export class NgWynnAnimationModule { }
