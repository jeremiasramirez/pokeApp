import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from "@angular/common/http"
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

import { MatButtonModule} from "@angular/material/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatListModule } from "@angular/material/list"

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRippleModule} from '@angular/material/core';
import { ScrollingModule } from "@angular/cdk/scrolling";
// component
import { HomeComponent } from "./home/home.component"
import { SearchComponent } from "./search/search.component"
import { AllComponent } from "./all/all.component"


// routing
import { routing} from "./app.route";
import { OnlyPokeComponent } from './only-poke/only-poke.component';
import { InitAppComponent } from './init-app/init-app.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    AllComponent,
    OnlyPokeComponent,
    InitAppComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    routing,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatListModule,
    MatRippleModule,
    FormsModule,
    ScrollingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
