import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums/albums.service';
import {IAlbum} from '../../model/ialbum';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.scss'],
  providers: [ AlbumsService ]
})
export class AlbumesComponent implements OnInit {

  constructor( private _albumesS: AlbumsService ) { }

  albumes: IAlbum[] = []

  ngOnInit(): void {

    this._albumesS.getAlbumes()
      .subscribe( albumesData =>{
        this.albumes = albumesData;
      });
  }

}
