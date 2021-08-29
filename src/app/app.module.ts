import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderDirective } from './header/header.directive';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ImageSliderComponent } from './shared/image-slider/image-slider.component';
import { WhatWeDoComponent } from './home/what-we-do/what-we-do.component';
import { OurProcessComponent } from './home/our-process/our-process.component';
import { HttpClientModule } from '@angular/common/http'

import { MatCarouselModule } from '@ngbmodule/material-carousel';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderDirective,
    HomeComponent,
    ImageSliderComponent,
    WhatWeDoComponent,
    OurProcessComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,

    MatToolbarModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
