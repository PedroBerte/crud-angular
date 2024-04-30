import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { gameTypes } from '../types/gameTypes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/games';

  getGames(): Observable<gameTypes[]> {
    return this.http.get<gameTypes[]>(this.url);
  }

  postGame(game: gameTypes): Observable<gameTypes> {
    return this.http.post<gameTypes>(this.url, game);
  }

  putGame(game: gameTypes): Observable<gameTypes> {
    return this.http.put<gameTypes>(`${this.url}/${game.id}`, game);
  }

  deleteGame(id: number): Observable<gameTypes> {
    return this.http.delete<gameTypes>(`${this.url}/${id}`);
  }
}
