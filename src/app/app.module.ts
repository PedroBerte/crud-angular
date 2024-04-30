import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputControlComponent } from './components/input-control/input-control.component';
import { GamesService } from './services/games.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomeComponent, InputControlComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [GamesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
