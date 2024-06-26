import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { MainSectionComponent } from './shared/main-section/main-section.component';
import { MainAnimationComponent } from './shared/main-animation/main-animation.component';
import { MainSectionProjectsComponent } from './shared/main-section.projects/main-section.projects.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSectionProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
