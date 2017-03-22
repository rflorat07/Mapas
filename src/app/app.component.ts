import { Component } from '@angular/core';
import { MapasService } from './services/mapas.service';
import { Marcador } from './interfaces/marcador.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lat: number = 9.976052;
  lng: number = -84.006836;
  zoom: number = 16;

  constructor(public _ms: MapasService) { }

  clickMapa(evento) {
    let nuevoMarcador: Marcador = {
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      titulo: 'Sin titulo',
      draggable: true
    };

    this._ms.insertarMarcador(nuevoMarcador);
  }


}
