import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/cards.model';

@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {

  private apiUrl = 'https://static.krcg.org/data/vtes.json';

  constructor(
    private http: HttpClient
  ) { }

  getJsonData():Observable<Card[]>{
    const data = this.http.get<Card[]>(this.apiUrl);
    return data;
  }
  
}
