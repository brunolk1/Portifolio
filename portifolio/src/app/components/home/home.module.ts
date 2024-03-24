import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { BtnPrimaryComponent } from '../../shared/btn-primary/btn-primary.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [],
  exports: [
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent
  ]
  
})
export class HomeModule { }
 