import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Problem1Component } from './problems/pages/problem-1/problem-1.component';
import { Problem2Component } from './problems/pages/problem-2/problem-2.component';
import { ProblemsModule } from './problems/problems.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    Problem1Component,
    Problem2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProblemsModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
