import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Game[]>{
   // let params = new HttpParams().set('page',page).set('size', size);
    return this.http.get<Game[]>(`${API_CONFIG.baseURL}/admin/games` /*, {params: params}*/)
  }
}
