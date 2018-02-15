import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmailFormComponent } from './components/email-form.component';
import {HttpModule} from '@angular/http';
import {EmailService} from './services/email.service';


@NgModule({
  declarations: [
    AppComponent,
    EmailFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
