import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtComponent } from './art/art.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
