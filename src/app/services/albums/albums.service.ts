import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAlbum } from '../../model/ialbum';
import { Observable } from 'rxjs';

@Injectable()
export class AlbumsService {

  constructor( private _http: HttpClient ) { }

  public getAlbumes():Observable<IAlbum[]>{
    return this._http.get<IAlbum[]>('http://localhost:8080/albumes');
  }

}
