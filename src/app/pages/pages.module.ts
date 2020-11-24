import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

// Componentes
import { ComponentsModule } from '../components/components.module';
import { AlbumesComponent } from './albumes/albumes.component';
import { CancionesComponent } from './canciones/canciones.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    HomeComponent, 
    AlbumesComponent, 
    CancionesComponent, 
    Error404Component
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent,
    AlbumesComponent,
    CancionesComponent,
    Error404Component
  ]
})
export class PagesModule { }
