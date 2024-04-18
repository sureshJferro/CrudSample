import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";

import { map, distinctUntilChanged, tap, shareReplay } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

import { Router } from "@angular/router";
import { User } from "../Model/user/User";

@Injectable({ providedIn: "root" })
export class CommonService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser = this.currentUserSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  public isAuthenticated = this.currentUser.pipe(map((user) => !!user));

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  login(credentials: {
    Email: string;
    Password: string;
  }): Observable<{ user: User }> {
    const reqBody ={
    Email:credentials.Email,
    Password:credentials.Password
    }
    debugger
    return this.http.post<{ user: User }>("https://localhost:7215/api/user/Login", credentials );
  }

  register(credentials: {
    UserName: string;
    Email: string;
    Password: string;
    PhoneNumber: string;
  }): Observable<{ user: User }> {
    
    debugger
    return this.http.post<{ user: User }>("https://localhost:7215/api/user/Register", credentials );
  }
}
