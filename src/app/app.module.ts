import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './layouts/layout.module';
import { AppRoutingmodule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingmodule, LayoutModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
