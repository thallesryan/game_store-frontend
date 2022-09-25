import { Game } from './../models/Game';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Game[]>{
   // let params = new HttpParams().set('page',page).set('size', size);
    return this.http.get<Game[]>(`${API_CONFIG.baseURL}/admin/games` /*, {params: params}*/)
  }

  public save(game:Game):Observable<Game>{
    return this.http.post<Game>(`${API_CONFIG.baseURL}/admin/games`, game)
  }

  public findById(id:number):Observable<Game>{
    return this.http.get<Game>(`${API_CONFIG.baseURL}/admin/games/${id}`)
  }

  public update(game:Game, id:number):Observable<Game>{
    return this.http.put<Game>(`${API_CONFIG.baseURL}/admin/games/${id}`, game)
  }
}
