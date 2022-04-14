import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevelopersPageComponent } from './pages/developers-page/developers-page.component';

const routes: Routes = [
  {
    path: 'Developers',
    component: DevelopersPageComponent
  },
  {
    path: '**',
    component: DevelopersPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
