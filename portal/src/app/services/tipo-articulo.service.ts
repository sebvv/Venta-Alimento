import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,  Observable, Subject } from 'rxjs';
import {map} from 'rxjs/operators';
import { iTipoArticulo, iTipoArticuloResponse } from '../models/TipoArticulo.model';
import { ConexionService } from './Conexion.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoArticuloService {

  url : string = environment.urlApi + "TipoArticulo";
  tipoArticuloResponse$ = new BehaviorSubject<iTipoArticuloResponse|null>(null);
  tipoArticulo$ = new BehaviorSubject<iTipoArticulo|null>(null);
  private _refresh$ = new Subject<void>();

  constructor(private http:HttpClient,private _conexionService : ConexionService) { }

  get Refresh$(){
    return this._refresh$;
  }

  getTipoArticulo$(){
    return this.tipoArticulo$.asObservable();
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


  AddTipoArticulo(_accionista : iTipoArticulo){
    return this.http.post<iTipoArticulo>(this.url, _accionista);
  }

  AddTipoArticulo2(TipoArticulo: iTipoArticulo) {
    return this._conexionService.getQueryPostObjectPromise(`TipoArticulo`, TipoArticulo);
  }

  EditTipoArticulo(id: number , TipoArticulo: iTipoArticulo) {
    return this._conexionService.getQueryPutObjectPromise(`TipoArticulo/`+id, TipoArticulo);
  }

  DeleteTipoArticulo(idTipoArticulo: number) {
    return this._conexionService.getQueryDeleteObjectPromise(`TipoArticulo`, idTipoArticulo);
  }
}
