import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumesComponent } from './pages/albumes/albumes.component';
import { CancionesComponent } from './pages/canciones/canciones.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'albumes', component: AlbumesComponent },
  { path: 'canciones', component: CancionesComponent },
  { path: '404', component: Error404Component },
  { path: "**", redirectTo: "/404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
