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
  currentCa: any;
  locationCa: any;
  currentAx: any;
  locationAx: any;
  constructor(private api: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherShbin();
    this.getWeatherCairo();
    this.getWeatherAlex();
  }
  getWeatherShbin() {
    this.api.shbinApi().subscribe((res) => {
      console.log(res);
      this.current = res.current;
      this.location = res.location;
    });
  }
  getWeatherCairo() {
    this.api.cairoApi().subscribe((res) => {
      // console.log(res);
      this.currentCa = res.current;
      this.locationCa = res.location;
    });
  }
  getWeatherAlex() {
    this.api.alexApi().subscribe((res) => {
      // console.log(res);
      this.currentAx = res.current;
      this.locationAx = res.location;
    });
  }
}
