import { ImageSliderComponent } from './shared/component/image-slider/image-slider.component';
import { NgModule, Component } from '@angular/core';
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
import { MatTabsModule } from '@angular/material/tabs';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

import { WhatWeDoComponent } from './home/what-we-do/what-we-do.component';
import { OurProcessComponent } from './home/our-process/our-process.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { OfferedServicesComponent } from './offered-services/offered-services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PricingComponent } from './pricing/pricing.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AppearDirective } from './shared/directive/appear.directive';
import { ImageDirective } from './shared/directive/image.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderDirective,
    HomeComponent,
    ImageSliderComponent,
    WhatWeDoComponent,
    OurProcessComponent,
    AboutUsComponent,
    OfferedServicesComponent,
    ContactUsComponent,
    PricingComponent,
    GalleryComponent,
    AppearDirective,
    ImageDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    HttpClientModule,

    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
