import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';



import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { BtnPrimaryComponent } from '../../shared/btn-primary/btn-primary.component';
import { MainSectionComponent } from 'app/shared/main-section/main-section.component';
import { MainAnimationComponent } from 'app/shared/main-animation/main-animation.component';
import { HttpClientModule } from '@angular/common/http';
import { MainSectionProjectsComponent } from 'app/shared/main-section.projects/main-section.projects.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent,
    MainSectionComponent,
    MainAnimationComponent,
    MainSectionProjectsComponent,
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    HttpClientModule,
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [],
  exports: [
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent,
    MainSectionComponent,
    MainAnimationComponent,
    MainSectionProjectsComponent,
  ]
})
export class HomeModule { }
