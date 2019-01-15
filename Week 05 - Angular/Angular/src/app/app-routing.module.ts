import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeEditComponent } from './home/home-edit/home-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'home',
    canActivate: [],
    children: [
      { path: '', component: HomeComponent },
      { path: ':mode', component: HomeEditComponent },
      { path: ':mode/:id', component: HomeEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
