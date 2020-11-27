import { Component, OnInit } from '@angular/core';
import { SCancionesService } from '../../services/canciones/scanciones.service';
import { ICancion } from '../../model/icancion';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss'],
  providers: [SCancionesService]
})
export class CancionesComponent implements OnInit {

  constructor( private _SCanciones: SCancionesService ) { }
  canciones: ICancion[] = [];
  
  
  ngOnInit(): void {
    // Esto es para simular la carga de la data y poder ver el lodaer
   setTimeout( ()=>{
      this._SCanciones.getCanciones()
      .subscribe(data =>{
        this.canciones = data;
      });
    }, 1000);
  }

  nuevaCancion(){
    console.log('Aqui es para agregar una nueva cancion');
  }

}
