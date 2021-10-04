import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  current: any;
  location: any;
  currentIs: any;
  locationIs: any;
  currentAx: any;
  locationAx: any;
  locations!: string;
  latitude!: number;
  longitude!: number;
  constructor(private api: WeatherService) {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((location) => {
      this.latitude = +location.coords.latitude;
      this.longitude = +location.coords.longitude;
      this.locations =
        location.coords.latitude + ',' + location.coords.longitude;
      // console.log(this.locations);
      this.getMyLocation();
    });

    this.getWeatherAlex();
    this.getWeatherIsmailia();
  }
  getWeatherAlex() {
    this.api.alexApi().subscribe((res) => {
      // console.log(res);
      this.currentAx = res.current;
      this.locationAx = res.location;
    });
  }
  getWeatherIsmailia() {
    this.api.ismailiaApi().subscribe((res) => {
      console.log(res);
      this.currentIs = res.current;
      this.locationIs = res.location;
    });
  }
  getMyLocation() {
    this.api.myLocCity(this.latitude, this.longitude).subscribe((res) => {
      // console.log(res);
      this.current = res.current;
      this.location = res.location;
    });
  }
}
