import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DtoFormComponent } from './views/dto-form/dto-form.component';
import { HomeComponent } from './views/home/home.component';

// Create Routes for pages
const routes: Routes = [
  {
    path: '',
    component:  HomeComponent,
  },
  {
    path: 'dto-form',
    component: DtoFormComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
