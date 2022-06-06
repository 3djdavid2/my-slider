import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatRadioModule} from '@angular/material/radio'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,    
    AppRoutingModule,
    MatRadioModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
