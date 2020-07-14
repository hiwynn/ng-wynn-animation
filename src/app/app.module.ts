import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

import { NgWynnAnimationModule } from "./ng-wynn-animation/ng-wynn-animation.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    NgWynnAnimationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
