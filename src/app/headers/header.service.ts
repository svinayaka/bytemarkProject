import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  createAuthorizationHeader() {
    const head = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Language': 'en-US'
    };
    return new HttpHeaders(head);
  }
  constructor(private http: HttpClient) { }
  get(url) {
    // const header = this.createAuthorizationHeader();
    // return this.http.get(url, { headers: header });
    return this.http.get(url);
  }
}
