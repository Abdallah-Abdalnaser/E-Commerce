import { Component, OnInit } from '@angular/core';
import { faSun, IconDefinition ,faSpinner } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from './weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.scss']
})
export class AppComponent implements OnInit {
  faSun:IconDefinition=faSun;
  faSpinner:IconDefinition=faSpinner;
  temperature:number=0;
  humidity:number=0;
  rainFall:number=0;
  light:boolean=false;
  isFetching:boolean=true;

  constructor(private WeatherAppService:WeatherService) {
    setInterval(()=>{
      this.updateWeatherData()
    },1000)
  }

  ngOnInit(): void {
    this.updateWeatherData();
  }

  updateWeatherData() {
    this.isFetching=true;
    this.WeatherAppService.temperatureSensor().subscribe(
      (res) => {
        this.temperature = Number(res);
      }
    );

    this.WeatherAppService.Humidity().subscribe(
      (res) => {
        this.humidity = Number(res);
      }
    );

    this.WeatherAppService.RainSensor().subscribe(
      (res) => {
        this.rainFall = Number(res);
      }
    );

    this.WeatherAppService.lightSensor().subscribe(
      (res) => {
        this.light = Boolean(res);
      }
    )
    this.isFetching = false;
  }

  checkLight():string {
    if (this.light === true) {
      return "gold";
    }else {
      return "#e7e8ea";
    }
  }
}
