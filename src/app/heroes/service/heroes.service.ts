import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Hero } from '../interface/heroes.interfaces';
import { environments } from 'src/environment/environment';

@Injectable({providedIn: 'root'})
export class HeroesService {
  private baseUrl: string =environments.baseUrl
  constructor( private http: HttpClient) { }

  getHeroes():Observable<Hero[]>{
    return this.http.get<Hero[]>((`${this.baseUrl}/heroes`))
  }

  getHeroById(id:string):Observable<Hero | undefined>{
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`).pipe(catchError((Error) => of(undefined)))
  }

  getsugegstion(query:String):Observable<Hero[]>{
    return this.http.get<Hero[]>((`${this.baseUrl}/heroes?q=${query}&_limit=6`))
  }

  addHero(hero:Hero):Observable<Hero>{
    return this.http.post<Hero>(`${this.baseUrl}/heroes`,hero)
  }

  UpdateHero(hero:Hero):Observable<Hero>{
    return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`,hero)
  }

  DeleteHero(id:string):Observable<Hero>{
    return this.http.delete<Hero>(`${this.baseUrl}/heroes/${id}`)
  }

}
