import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtComponent } from './art/art.component';
import { ModellingComponent } from './modelling/modelling.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        title: "Tee's Doodles!",
        component: HomeComponent
      },
      {
        path: 'art',
        title: "Tee's Art Commissions!",
        component: ArtComponent
      },
      {
        path: 'modelling',
        title: "Tee's Modelling Commissions!",
        component: ModellingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
