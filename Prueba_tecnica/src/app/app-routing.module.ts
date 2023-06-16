import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Problem1Component } from './problems/pages/problem-1/problem-1.component';
import { Problem2Component } from './problems/pages/problem-2/problem-2.component';

const routes: Routes = [
  {
    path: '',
    component: Problem1Component, 
    pathMatch: 'full'
  },
  {
    path: 'problem-1',
    component: Problem1Component
  },
  {
    path: 'problem-2',
    component: Problem2Component
  },
  {
    path: '**',
    redirectTo: ''
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
