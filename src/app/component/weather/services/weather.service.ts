import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private myApi = env.apiWeather;
  constructor(private http: HttpClient) {}
  shbinApi(): Observable<any> {
    return this.http.get(
      `${this.myApi}/current?access_key=cecd43861197da91dd35ee75b6816390&query=shebin`
    );
  }
  cairoApi(): Observable<any> {
    return this.http.get(
      `${this.myApi}/current?access_key=8b5704d814da5ed7041b385c9070f9b9&query=Ismailia`
    );
  }
  alexApi(): Observable<any> {
    return this.http.get(
      `${this.myApi}/current?access_key=0c157dea69cc388d9a2460b93d64c73f&query=alex`
    );
  }
}
