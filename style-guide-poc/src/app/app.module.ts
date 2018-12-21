import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabNavComponent } from './tab-nav/tab-nav.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { EmailSignupComponent } from './email-signup/email-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    TabNavComponent,
    NavBarComponent,
    ProductThumbnailComponent,
    ProductGridComponent,
    EmailSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
