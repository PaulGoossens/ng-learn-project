import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SelectOnFocusDirective } from './directives/select-on-focus/select-on-focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SelectOnFocusDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
