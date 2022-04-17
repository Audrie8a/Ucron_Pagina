import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevelopersPageService {

  API_URI = "http://3.95.6.179/";
  constructor(private http: HttpClient) { }

  consumeGet(url: string) {
    return this.http.get<any>(this.API_URI + url).pipe(
      catchError(err => this.manejarError(err))
    );
  }

  manejarError(error: any) {
    return throwError(() => error);
  }

  getData_Devs() {
    return this.consumeGet(`getDevelopers`);
  }
}
