import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService} from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ConexionService {
  url!: string;
  headers = new HttpHeaders();
  //options = new RequestOptions();
  options = {
    headers: Headers
  }

  constructor(
    private http: HttpClient
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'asda1234'
    });
  }

  getQuery(query: string) {
    // const url = `${environment.urlApi}${query}`;

    const ruta = this.mapeaRuta(environment.urlApi);
    const url = `${ruta}${query}`;
    

    return this.http.get(url, { headers:this.headers });
  }

  getQueryPost(query: any) {

    const ruta = this.mapeaRuta(environment.urlApi);
    const url = `${ruta}${query}&sacr=asda1234`;
      
    return this.http.post<any>(url, this.options,{ headers:this.headers });
  }

  getAuthPost(query: any) {

    console.log(query);

    const ruta = (environment.urlApiAuth);
    console.log(ruta);
    const url = `${ruta}${query}`;

    console.log(url);


    return this.http.post<any>(url,this.options, { headers:this.headers }).pipe(
      map(response => response));
  }

  getQueryPostObject(query: any, object: any) {

    const ruta = this.mapeaRuta(environment.urlApi);
    const url = `${ruta}${query}`;


    return this.http.post<any>(url, object, { headers:this.headers }).pipe(
      map(response => response));
  }

  getQueryPostObjectPromise<T>(query: string, object: any) {
    //const ruta = this.mapeaRuta(environment.urlApi);
    const ruta = environment.urlApi;
    const url = `${ruta}${query}`;
    //console.log('url',url);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'asda1234'
    });

    //console.log(headers);
    var promise = new Promise((resolve, reject) => {
      this.http.post<any>(url, object, { headers }).pipe(
        map(response => response)).subscribe((data: T) => {
          resolve(data);
          reject(data);
        });
    });
    return promise;
  }

  getQueryPutObjectPromise<T>(query: string, object: any) {
    //const ruta = this.mapeaRuta(environment.urlApi);
    const ruta = environment.urlApi;
    const url = `${ruta}${query}`;
    
    console.log('*url',url);
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'asda1234'
    });
    var promise = new Promise((resolve, reject) => {
      this.http.put<any>(url, object, { headers }).pipe(
        map(response => response)).subscribe((data: T) => {
          resolve(data);
          reject(data);
        });
    });
    return promise;
  }

  getQueryDeleteObjectPromise<T>(query: string, object: any) {
    
    //const ruta = this.mapeaRuta(environment.urlApi);
    const ruta = environment.urlApi;
    let url = `${ruta}${query}`;

    url = url + '/' + object;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer asda1234'
    });
    var promise = new Promise((resolve, reject) => {
      this.http.delete<any>(url,{ headers }).pipe(
        map(response => response)).subscribe((data: T) => {
          resolve(data);
          reject(data);
        });
    });
    return promise;
  }

  decodeJwt(token: string): any {
    const helper = new JwtHelperService();

    const decodedToken = helper.tokenGetter();
    console.log(decodedToken);

    // Other functions
    const expirationDate = helper.getTokenExpirationDate(token);
    console.log(expirationDate);
    const isExpired = helper.isTokenExpired(token);
    console.log(isExpired);

    return decodedToken;
  }

  mapeaRuta(ruta: string) {
    const header = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
    const foot = "eomGwcNBBqAtVPy2aQI9GntvzsnCY3PHmaLIKrxT4qM";
    let token = header + '.' + ruta + '.' + foot;
    const helper = new JwtHelperService();

    const hidden = "eyJocyI6InBhbGFicmFhemFyIn0";
    token = token.replace(hidden, '');

    const decodedToken = helper.decodeToken(token);
    console.log(decodedToken);
    return decodedToken['rt'];
  }
}