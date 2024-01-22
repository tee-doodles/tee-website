import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtComponent } from './art/art.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModellingComponent } from './modelling/modelling.component';
import { AppService } from './app.service';
import { DownloadsComponent } from './downloads/downloads/downloads.component';

@NgModule({
  declarations: [
    AppComponent,
    ModellingComponent,
    DownloadsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
