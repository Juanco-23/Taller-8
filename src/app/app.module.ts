import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { barraComponent } from './componente/barra/barra.component';
import { inicioComponent } from './componente/inicio/inicio.component';
import { vista2Component } from './componente/vista2/vista2.component';
import { vista3Component } from './componente/vista3/vista3.component';
import { vista4Component } from './componente/vista4/vista4.component';
import { FooterComponent } from './componente/footer/footer.component';

//* Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    barraComponent,
    inicioComponent,
    vista2Component,
    vista3Component,
    vista4Component,
    FooterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
