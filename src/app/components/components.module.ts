import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { AlbumCardComponent } from './album-card/album-card.component';

// pipe 
import { MiFechaPipe } from '../pipes/mi-fecha.pipe';



@NgModule({
  declarations: [
    BannerComponent, 
    AlbumCardComponent,
    MiFechaPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerComponent,
    AlbumCardComponent
  ]
})
export class ComponentsModule { }
