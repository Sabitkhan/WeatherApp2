import axios from "axios";
import { useState, ChangeEvent, useEffect } from "react";
import { forecastData, Option } from "../interfaces";

const useForecast = () => {
  const [term, setTerm] = useState<string>("");
  const [error, setError] = useState("");
  const [option, setOption] = useState<Option[]>([]);
  const [city, setCity] = useState<Option | null>(null);
  const [forecast, setForecast] = useState<forecastData | null>(null);

  const getSearchOption = (value: string) => {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${"8f80c01abdfcb585cbb43645e7b10956"}`
      )

      .then((res) => {
        setOption(res.data);
      })
      .catch((err) => setError(err.message));
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(value);
    if (value === "") return;
    getSearchOption(value);
  };

  const getForcast = (city: Option) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${
          city?.lat
        }&lon=${
          city.lon
        }&units=metric&appid=${"8f80c01abdfcb585cbb43645e7b10956"}`
      )
      .then((res) => {
        const forecastData = {
          ...res.data.city,
          list: res.data.list.slice(0, 16),
        };
        setForecast(forecastData);
      })
      .catch((err) => setError(err.message));
  };

  const onsubmit = () => {
    console.log("sabir");
    if (!city) return;

    getForcast(city);
    console.log("sabir");
  };

  const onOptionSelect = (option: Option) => {
    setCity(option);
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOption([]);
    }
  }, [city]);
  return {
    term,
    option,
    forecast,
    onInputChange,
    onOptionSelect,
    onsubmit,
    error,
  };
};
export default useForecast;
