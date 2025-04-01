import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription} from 'rxjs';
import { LandingScreenService } from './landing-screen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.scss']
})
export class LandingScreenComponent implements OnInit {
  private currentTime: Date = new Date();
  private timeSub: Subscription | null = null;
  private weatherSub: Subscription | null = null;
  greetingElement: any = '';
  weatherData: any = null;

  temperature: number | null = null;
  currentHover = '';

  clockDots = [
    { x: 50, y: 10 },
    { x: 80, y: 20 },
    { x: 20, y: 20 },
    { x: 90, y: 50 },
    { x: 10, y: 50 }
  ];

  constructor(private landingScreenService: LandingScreenService, private router: Router) { }

  ngOnInit(): void {
    this.updateClock();
    this.timeSub = interval(1000).subscribe(() => {
      this.currentTime = new Date();
    });
    this.fetchWeatherData();
  }

  ngOnDestroy() {
    if (this.timeSub) {
      this.timeSub.unsubscribe();
    }
  }

  fetchWeatherData() {
    this.landingScreenService.getWeatherForTamilNadu().subscribe(
      (data) => {
        this.weatherData = data;
       console.log('Weather data', this.weatherData);
        
      },
      (error) => {
        console.error('Error fetching weather data', error);
      }
    );
  }

  getHourDegree(): number {
    return this.currentTime.getHours() * 30 + this.currentTime.getMinutes() * 0.5;
  }

  getMinuteDegree(): number {
    return this.currentTime.getMinutes() * 6;
  }

  getSecondDegree(): number {
    return this.currentTime.getSeconds() * 6;
  }

  updateClock() {
    this.greetingElement = document.querySelector('.hello') as HTMLSpanElement;
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const hourHand = document.querySelector('.hour-hand') as HTMLElement;
    const minuteHand = document.querySelector('.minute-hand') as HTMLElement;

    if (hourHand && minuteHand) {
      hourHand.style.transform = `translateX(-50%) rotate(${(hours + minutes / 60) * 30}deg)`;
      minuteHand.style.transform = `translateX(-50%) rotate(${minutes * 6}deg)`;
    }

    let greeting = 'Good Morning!';

    if (hours >= 12 && hours < 17) {
      greeting = 'Good Afternoon!';
    } else if (hours >= 17 && hours < 24) {
      greeting = 'Good Evening!';
    } else if (hours >= 0 || hours < 12) {
      greeting = 'Good Morning!';
    }

    this.greetingElement.textContent = greeting;
  }

  showLogin() {
    this.router.navigate(['/login']);
  }
}
