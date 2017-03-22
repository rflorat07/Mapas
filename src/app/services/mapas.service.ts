import { Injectable } from '@angular/core';
import { Marcador } from './../interfaces/marcador.interface';

@Injectable()
export class MapasService {

  marcadores: Marcador[] = [];

  constructor() {
    let nuevoMarcador: Marcador = {
      lat: 9.976052,
      lng: -84.006836,
      titulo: 'Iglesia de Coronado',
      draggable: true
    };

    this.marcadores.push(nuevoMarcador);
  }

  insertarMarcador(marcador: Marcador) {
    this.marcadores.push(marcador);
  }


}
