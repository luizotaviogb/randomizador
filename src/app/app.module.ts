import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component'
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { CardComponent } from './shared/card/card.component';
import { InitialCardComponent } from './shared/card/initial-card/initial-card.component';
import { FinalCardComponent } from './shared/card/final-card/final-card.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    CardComponent,
    InitialCardComponent,
    FinalCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
