import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { DRPickerDirective } from './directives/drpicker.directive';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxDaterangepickerMd.forRoot(), ],
  declarations: [ AppComponent, HelloComponent, DRPickerDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
