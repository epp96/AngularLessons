import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WarningAlert } from './WarningAlert/WarningAlert.component';
import { SuccessfullAlert } from './SuccessfullAlert/SuccessfullAlert.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlert,
    SuccessfullAlert
  ],
  imports: [
    BrowserModule,
    FormsModule
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
