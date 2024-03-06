import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {

  private apiUrl = 'https://api.krcg.org/data/vtes.json';

  constructor(
    private http: HttpClient
  ) { }

  getJsonData():Observable<any>{
    const data = this.http.get<any>(this.apiUrl);
    return data;
  }

  getSpecificData(key:string):Observable<any>{
    const data = this.http.get<any>(key);
    return data;
  }
}
