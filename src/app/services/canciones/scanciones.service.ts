import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICancion } from '../../model/icancion';

@Injectable()
export class SCancionesService {

  constructor( private http: HttpClient ) { }

  public getCanciones(): Observable<ICancion[]>{
    return this.http.get<ICancion[]>('http://localhost:8080/canciones');
  }

}
