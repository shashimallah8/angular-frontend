import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  public baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  get(endpoint: string, extraHeaders?: any) {
    let headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
    });
    for (let headerKey in extraHeaders) {
      headers.append(headerKey, extraHeaders[headerKey]);
    }
    let httpOptions = {
      headers: headers,
    };
    return this.http.get(`${endpoint}`, httpOptions).pipe(
      map((res) => {
        return res;
      })
    );
    // await this.http.get(`${endpoint}`, httpOptions).pipe(
    //     map((res) => {
    //       return res;
    //     })
    //   );
  }

  post(endpoint: string, queryParams: any = new Object(), extraHeaders?: any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache, no-store',
      "Access-Control-Allow-Origin": "*"
    })
    ;
    for (let headerKey in extraHeaders) {
      headers.append(headerKey, extraHeaders[headerKey]);
    }
    let httpOptions = {
      headers: headers,
    };
    return this.http.post(`${endpoint}`, queryParams, httpOptions).pipe(
      map((res) => {
        return res;
      })
    );
  }
  
}
