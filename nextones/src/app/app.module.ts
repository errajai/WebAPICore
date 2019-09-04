import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NextonesComponent } from './nextones/nextones.component';
import { NextoneComponent } from './nextones/nextone/nextone.component';
import { NextoneListComponent } from './nextones/nextone-list/nextone-list.component';
import { NextoneService } from './shared/nextone.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NextonesComponent,
    NextoneComponent,
    NextoneListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NextoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
