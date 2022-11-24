import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { iTipoArticulo, iTipoArticuloResponse } from '../models/tipo-articulo.model';
import { ConexionService } from './Conexion.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoArticuloService {

  url : string = environment.urlApi + "TipoArticulo";
  tipoarticuloResponse$ = new BehaviorSubject<iTipoArticuloResponse|null>(null);
  tipoarticulo$ = new BehaviorSubject<iTipoArticulo|null>(null);
  private _refresh$ = new Subject<void>();

  constructor(private http:HttpClient,private _conexionService : ConexionService) { }

  get Refresh$(){
    return this._refresh$;
  }

  getTipoArticulo$(){
    return this.tipoarticulo$.asObservable();
  }

  getEntries():Observable<iTipoArticulo[]>{
    return this.http.get<any>(this.url)
  }

  getTipoArticulo() {
      return this._conexionService.getQuery(`TipoArticulo`)
      .pipe(map(con => {
      let data = con
      return data;
      }));
  }


  AddTipoArticulo(_tipoarticulo : iTipoArticulo){
    return this.http.post<iTipoArticulo>(this.url, _tipoarticulo);
  }

  AddTipoArticulo2(tipoarticulo: iTipoArticulo) {
    return this._conexionService.getQueryPostObjectPromise(`TipoArticulo`, tipoarticulo);
  }

  EditTipoArticulo(id: number , tipoarticulo: iTipoArticulo) {
    return this._conexionService.getQueryPutObjectPromise(`TipoArticulo/`+id, tipoarticulo);
  }

  DeleteTipoArticulo(idtipoarticulo: number) {
    return this._conexionService.getQueryDeleteObjectPromise(`TipoArticulo`, idtipoarticulo);
  }
}