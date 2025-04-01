import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LandingScreenService {
  private apiKey = 'b1b15e88fa797225412429c1c50c122a1'; // Replace with your actual API key
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeatherForTamilNadu(city: string = 'Tamil Nadu'): Observable<any> {
    const url = `${this.baseUrl}?q=${city},IN&appid=${this.apiKey}&units=metric`;
    
    return this.http.get(url).pipe(
      map((response: any) => ({
        temperature: response.main.temp,
        description: response.weather[0].description,
        city: response.name,
        humidity: response.main.humidity,
        windSpeed: response.wind.speed
      }))
    );
  }
}
