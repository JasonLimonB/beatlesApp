import { Component, Input, OnInit } from '@angular/core';
import { IAlbum } from '../../model/ialbum';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  @Input() album: IAlbum;  

  constructor() { }

  ngOnInit(): void {    
  }

}
