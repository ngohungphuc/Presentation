import { Injectable } from "@angular/core";
import {
  Observable,
  Subscription,
  BehaviorSubject,
  throwError,
  of,
  interval
} from "rxjs";
import { filter, map, first, tap, catchError, flatMap } from "rxjs/operators";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import { RefreshGrantModel } from "../models/refresh-grant-model";
import { ProfileModel } from "../models/profile-model";
import { AuthStateModel } from "../models/auth-state-model";
import { AccountModel } from "../models/register.model";
import { LoginModel } from "../models/login-model";
import { AuthTokenModel } from "../models/auth-token.model";

const jwtDecode = require("jwt-decode");

@Injectable()
export class AuthService {
  private initalState: AuthStateModel = {
    profile: null,
    tokens: null,
    authReady: false
  };
  private authReady$ = new BehaviorSubject<boolean>(false);
  private state: BehaviorSubject<AuthStateModel>;
  private refreshSubscription$: Subscription;

  state$: Observable<AuthStateModel>;
  tokens$: Observable<AuthTokenModel>;
  profile$: Observable<ProfileModel>;
  loggedIn$: Observable<boolean>;

  constructor(private http: HttpClient) {
    this.state = new BehaviorSubject<AuthStateModel>(this.initalState);
    this.state$ = this.state.asObservable();

    this.tokens$ = this.state.pipe(
      filter(state => state.authReady),
      map(state => state.tokens)
    );

    this.profile$ = this.state.pipe(
      filter(state => state.authReady),
      map(state => state.profile)
    );

    this.loggedIn$ = this.tokens$.pipe(map(tokens => !!tokens));
  }

  public init(): Observable<AuthTokenModel> {
    return this.startupTokenRefresh().pipe(tap(() => this.scheduleRefresh()));
  }

  public register(data: AccountModel): Observable<any> {
    return this.http
      .post(`account/register`, data)
      .pipe(catchError(error => throwError(error)));
  }

  public login(user: LoginModel): Observable<any> {
    return this.getTokens(user, "password").pipe(
      catchError(error => throwError(error)),
      tap(res => this.scheduleRefresh())
    );
  }

  public logout(): void {
    this.updateState({ profile: null, tokens: null });
    if (this.refreshSubscription$) {
      this.refreshSubscription$.unsubscribe();
    }
    this.removeToken();
  }

  public refreshTokens(): Observable<AuthTokenModel> {
    return this.state.pipe(
      first(),
      map(state => state.tokens),
      flatMap(tokens =>
        this.getTokens(
          { refresh_token: tokens.refresh_token },
          "refresh_token"
        ).pipe(catchError(error => throwError("Session Expired")))
      )
    );
  }

  public isAuthenticated(): boolean {
    const tokensString = localStorage.getItem("auth-tokens");
    console.log(tokensString)
    return tokensString !== null;
  }

  private storeToken(tokens: AuthTokenModel): void {
    const previousTokens = this.retrieveTokens();
    if (previousTokens != null && tokens.refresh_token == null) {
      tokens.refresh_token = previousTokens.refresh_token;
    }

    localStorage.setItem("auth-tokens", JSON.stringify(tokens));
  }

  private retrieveTokens(): AuthTokenModel {
    const tokensString = localStorage.getItem("auth-tokens");
    const tokensModel: AuthTokenModel =
      tokensString == null ? null : JSON.parse(tokensString);
    return tokensModel;
  }

  private removeToken(): void {
    localStorage.removeItem("auth-tokens");
  }

  private updateState(newState: AuthStateModel): void {
    const previousState = this.state.getValue();
    this.state.next(Object.assign({}, previousState, newState));
  }

  private getTokens(
    data: RefreshGrantModel | LoginModel,
    grantType: string
  ): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };

    Object.assign(data, {
      grant_type: grantType,
      scope: "openid offline_access"
    });

    let httpParams = new HttpParams();
    Object.keys(data).forEach(function(key) {
      httpParams = httpParams.append(key, data[key]);
    });

    console.log(httpParams);

    return this.http
      .post(`connect/token`, httpParams.toString(), httpOptions)
      .pipe(
        tap(res => {
          const tokens: AuthTokenModel = res;
          const now = new Date();
          tokens.expiration_date = new Date(
            now.getTime() + tokens.expires_in * 1000
          )
            .getTime()
            .toString();

          const profile: ProfileModel = jwtDecode(tokens.id_token);

          this.storeToken(tokens);
          this.updateState({ authReady: true, tokens, profile });
        })
      );
  }

  private startupTokenRefresh(): Observable<AuthTokenModel> {
    return of(this.retrieveTokens()).pipe(
      flatMap((tokens: AuthTokenModel) => {
        if (!tokens) {
          this.updateState({ authReady: true });
          return throwError("No token in Storage");
        }
        const profile: ProfileModel = jwtDecode(tokens.id_token);
        this.updateState({ tokens, profile });

        if (+tokens.expiration_date > new Date().getTime()) {
          this.updateState({ authReady: true });
        }

        return this.refreshTokens();
      }),
      catchError(error => {
        this.logout();
        this.updateState({ authReady: true });
        return throwError(error);
      })
    );
  }

  private scheduleRefresh(): void {
    this.refreshSubscription$ = this.tokens$
      .pipe(
        first(), // refresh every half the total expiration time
        flatMap((tokens: any) => interval((tokens.expires_in / 2) * 1000)),
        flatMap(() => this.refreshTokens())
      )
      .subscribe();
  }
}
