import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CraftingProjectComponent } from './crafting-project/crafting-project.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { TeamPositionsComponent } from './team-positions/team-positions.component';
import { OurPricesComponent } from './our-prices/our-prices.component';
import { WhoAreWe1Component } from './who-are-we1/who-are-we1.component';
import { WhoAreWe2Component } from './who-are-we2/who-are-we2.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CraftingProjectComponent,
    WhatWeDoComponent,
    CaseStudiesComponent,
    TeamPositionsComponent,
    OurPricesComponent,
    WhoAreWe1Component,
    WhoAreWe2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
