// importing all needed modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DtoFormComponent } from './views/dto-form/dto-form.component';
import { HomeComponent } from './views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { DTO_reducer } from './core/reducer/dto-data.reducer';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    DtoFormComponent,
    HomeComponent 
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    NgxSpinnerModule,
    StoreModule.forRoot({ DTO :DTO_reducer }), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
