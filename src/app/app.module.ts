import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RecaptchaModule } from 'ng-recaptcha';
import { Globals } from './globals';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FoundationComponent } from './content/foundation/foundation.component';
import { FaqComponent } from './content/faq/faq.component';
import { CdecboComponent } from './content/events/cdecbo.component';
import { ApplyComponent } from './content/apply/apply.component';


import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './/app-routing.module';
import { Recaptcha1Directive } from './recaptcha1.directive';
import { RecaptchaDirective } from './recaptcha.directive';

@NgModule({
  declarations: [
  AppComponent,
  NavbarComponent,
  FoundationComponent,
  FaqComponent,
  CdecboComponent,
  ApplyComponent,
  Recaptcha1Directive,
  RecaptchaDirective
  ],
  imports: [
  BrowserModule,
  FormsModule,
  RecaptchaModule.forRoot(),
  TooltipModule.forRoot(),
  HttpModule,
  CommonModule,
  CollapseModule.forRoot(),
  BsDropdownModule.forRoot(),
  AppRoutingModule,

  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
