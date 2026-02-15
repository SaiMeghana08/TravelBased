import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Trip {
  private URI="https:localhost:8080/recommend";
  constructor(private http: HttpClient) { }
  getRecommendations() {
    // return this.http.get(this.URI);
    return "Goa, Kerala, Rajasthan";
  }
}
