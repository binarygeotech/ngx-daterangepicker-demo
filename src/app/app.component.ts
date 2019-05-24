import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { DaterangepickerComponent, DaterangepickerDirective } from 'ngx-daterangepicker-material';
import { DRPickerDirective } from './directives/drpicker.directive';

// import { pickerDirective } from './directives/drpicker.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  selected;

  // @ViewChild(DaterangepickerDirective) pickerDirective: DaterangepickerDirective;
  @ViewChild(DRPickerDirective) pickerDirective: DRPickerDirective;

  inlineDate: any;
  picker: DaterangepickerComponent;

  
  ngOnInit() {
    this.picker = this.pickerDirective.picker;

    // console.log(this.pickerDirective);
  }

  open(e) {
    // console.log(this.pickerDirective);
    // this.pickerDirective.open(e);
    this.picker.show(e);
  }
}
