import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SliderMainComponent } from './slider-main/slider-main.component';
import { FormMainsectionComponent } from './form-mainsection/form-mainsection.component';
import { DesignSectionComponent } from './design-section/design-section.component';
import { LocationSectionComponent } from './location-section/location-section.component';
import { FooterComponent } from './footer/footer.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { MoreInfoComponent } from './more-info/more-info.component';

import { LandingComponent } from './landing/landing.component'

const appRoutes: Routes = [
  { path: 'landing', component: LandingComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderMainComponent,
    FormMainsectionComponent,
    DesignSectionComponent,
    LocationSectionComponent,
    FooterComponent,
    AmenitiesComponent,
    MoreInfoComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    OwlModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: false }),
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
