import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { HomePageModule } from './home/home.module';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  // imports: [BrowserModule, IonicModule.forRoot(), MainPageRoutingModule, HomePageModule],
  imports: [
    // CommonModule,
    // FormsModule,
    IonicModule,
    MainPageRoutingModule
  ],
  // imports: [BrowserModule, IonicModule.forRoot(), MainPageRoutingModule],
  declarations: [MainPage],
  // providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  // bootstrap: [MainPage] // MainPage is the root component for this module
})
export class MainPageModule {}
