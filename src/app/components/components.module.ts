import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { AlbumCardComponent } from './album-card/album-card.component';

// pipe 
import { MiFechaPipe } from '../pipes/mi-fecha.pipe';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    BannerComponent, 
    AlbumCardComponent,
    MiFechaPipe,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerComponent,
    AlbumCardComponent,
    LoaderComponent
  ]
})
export class ComponentsModule { }
