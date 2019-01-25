import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component'
import { CityComponent } from './city/city.component'

const routes: Routes = [
  {path: 'home', component: AppComponent , children:[
    {path: ':city', component: CityComponent},
  ]},
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', redirectTo: '/home' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
