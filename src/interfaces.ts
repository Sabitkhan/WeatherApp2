export interface Option {
  name: string;
  country: string;
  lat: number;
  lon: number;
}

interface Weather {
  icon: string;
  main: string;
  description: string;
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
  wind: {
    speed: number;
    gust: number;
    deg: number;
  };

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
