import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SliderMainComponent } from './slider-main/slider-main.component';
import { FormMainsectionComponent } from './form-mainsection/form-mainsection.component';
import { DesignSectionComponent } from './design-section/design-section.component';
import { LocationSectionComponent } from './location-section/location-section.component';
import { FooterComponent } from './footer/footer.component';
import { AmenitiesComponent } from './amenities/amenities.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderMainComponent,
    FormMainsectionComponent,
    DesignSectionComponent,
    LocationSectionComponent,
    FooterComponent,
    AmenitiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
