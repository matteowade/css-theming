import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabNavComponent } from './tab-nav/tab-nav.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { EmailSignupComponent } from './email-signup/email-signup.component';
import { FontListComponent } from './font-list/font-list.component';
import { FontsService } from './fonts.service';
import { CustomSelectMenuComponent } from './custom-select-menu/custom-select-menu.component';

import { ClickOutsideDirective } from './directives/click-outside';
import { ThemeDirective } from './directives/theme.directive';

@NgModule({
  declarations: [
    AppComponent,
    TabNavComponent,
    NavBarComponent,
    ProductThumbnailComponent,
    ProductGridComponent,
    EmailSignupComponent,
    FontListComponent,
    CustomSelectMenuComponent,
    ClickOutsideDirective,
    ThemeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    FontsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
