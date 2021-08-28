import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

@Injectable()
export class AuthHttpService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  public get(url: string, opts = {}): Observable<any> {
    this.setupAuthHeader(opts);
    return this.http.get(url, opts);
  }

  private setupAuthHeader(opts: any): void {
    if (opts.headers == null) {
      opts.headers = new HttpHeaders();
    }

    const token = this.authService.retrieveTokens();

    opts.headers = opts.headers.append(
      "Authorization",
      `${token.token_type} ${token.access_token}`
    );
  }
}
