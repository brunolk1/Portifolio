
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';




@NgModule({
  declarations: [
    AppComponent,
    CommonModule
  ],
  imports: [
    BrowserModule,    
    HomeModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AppModule { }
 