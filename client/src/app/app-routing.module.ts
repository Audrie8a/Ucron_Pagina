import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevelopersPageComponent } from './pages/developers-page/developers-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'Developers',
    component: DevelopersPageComponent
  },
  {
    path: 'Administrators',
    component: DevelopersPageComponent
  },
  {
    path: 'Home',
    component: HomePageComponent
  },
  {
    path: '**',
    redirectTo: 'Home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
