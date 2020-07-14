import { NgModule } from '@angular/core';

import { ScaleDirective } from "./animation-directive/animation-scale/scale.directive";
import { RotateDirective } from "./animation-directive/animation-rotate/rotate.directive";
import { FallDirective } from "./animation-directive/animation-fall/fall.directive";

@NgModule({
  declarations: [
    ScaleDirective,
    RotateDirective,
    FallDirective
  ],
  exports: [
    ScaleDirective,
    RotateDirective,
    FallDirective
  ],
})
export class NgWynnAnimationModule { }
