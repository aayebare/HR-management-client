import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffRegisterComponent } from './components/staff-register/staff-register.component';
import { StaffRetrieveComponent } from './components/staff-retrieve/staff-retrieve.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffRegisterComponent,
    StaffRetrieveComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
