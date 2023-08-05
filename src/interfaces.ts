export interface Option {
  name: string;
  lat: number;
  lon: number;
}

interface Weather {
  icon: string;
  main: string;
  description: string;
}

interface Wind {
  speed: number;
  gust: number;
  deg: number;
}

interface List {
  dt: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: Weather[];
  wind: Wind[];
  clouds: {
    all: number;
  };
  pop: number;
  visibility: number;
}
export interface forecastData {
  name: string;
  country: string;
  sunrise: number;
  sunset: number;
  list: List[];
}
