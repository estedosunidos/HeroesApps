import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environment/environment';
import { User } from '../interface/auth.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  private baserUrl=environments.baseUrl
  private user?:User
  constructor(private http:HttpClient) { }
  get currectUser():User|undefined{
    if(this.user) return undefined
    return structuredClone(this.user)
  }
  login(email:string, password:string):Observable<User>{
    return this.http.get<User>(`${this.baserUrl}/users`).pipe(
      tap(users=>this.user=users),
      tap(user=>localStorage.setItem('token','jsnsjhsjsjhjhsjhsjh')
      )
    )
  }
  logout(){
    this.user=undefined
    localStorage.removeItem('token')
  }
  chackAuthetication():Observable<boolean> {
    if(!localStorage.getItem('token')) return of(false)
    const token = localStorage.getItem('token')
    return this.http.get<User>(`${this.baserUrl}/users`).pipe(
      tap(users=>this.user=users),
      map(user=>!!user)
      )

  }

}
