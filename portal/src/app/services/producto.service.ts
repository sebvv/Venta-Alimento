import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { iProducto, iProductoResponse  } from '../models/producto.model';
import { ConexionService } from './Conexion.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url : string = environment.urlApi + "Productos";
  productoResponse$ = new BehaviorSubject<iProductoResponse|null>(null);
  producto$ = new BehaviorSubject<iProducto|null>(null);
  private _refresh$ = new Subject<void>();

  constructor(private http:HttpClient,private _conexionService : ConexionService) { }

  get Refresh$(){
    return this._refresh$;
  }

  getProducto$(){
    return this.producto$.asObservable();
  }

  getEntries():Observable<iProducto[]>{
    return this.http.get<any>(this.url)
  }

  getProducto() {
      return this._conexionService.getQuery(`Productos`)
      .pipe(map(con => {
      let data = con
      return data;
      }));
  }


  Addproducto(_producto : iProducto){
    return this.http.post<iProducto>(this.url, _producto);
  }

  AddProducto2(producto: iProducto) {
    return this._conexionService.getQueryPostObjectPromise(`Productos`, producto);
  }

  EditProducto(id: number , producto: iProducto) {
    return this._conexionService.getQueryPutObjectPromise(`Productos/`+id, producto);
  }

  DeleteProducto(idproducto: number) {
    return this._conexionService.getQueryDeleteObjectPromise(`Productos`, idproducto);
  }
}
