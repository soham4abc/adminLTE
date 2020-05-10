import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError, finalize } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CommonServiceService {
  constructor(private http: HttpClient) {}

  viewUrl = "https://reqres.in/api/login";

  postmethod(payload: any): Observable<any> {
    console.log(payload);
    return this.http
      .post<any>(this.viewUrl, payload, { observe: "response" })
      .pipe(
        map((res: any) => res),
        catchError((error: Response) => {
          return throwError(error);
        }),
        finalize(() => {})
      );
  }
}
