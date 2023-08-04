import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { Option } from "./Option";
import Search from "./components/Search";

const App = () => {
  const [term, setTerm] = useState<string>("");
  const [error, setError] = useState("");
  const [option, setOption] = useState<Option[]>([]);
  const [city, setCity] = useState<Option | null>(null);
  const [forecast, setForecast] = useState<null>(null);

  const getSearchOption = (value: string) => {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${"8f80c01abdfcb585cbb43645e7b10956"}`
      )
      .then((res) => setOption(res.data))
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
        `https://api.openweathermap.org/data/2.5/weather?lat=${city?.lat}&lon=${
          city.lon
        }&units=metric&appid=${"8f80c01abdfcb585cbb43645e7b10956"}`
      )
      .then((res) => setForecast(res.data))
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

  return (
    <main className="flex justify-center items-center bg-gradient-to-br  from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      {forecast ? (
        "We have foreCast"
      ) : (
        <Search
          term={term}
          option={option}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          error={error}
          onSubmit={onsubmit}
        />
      )}
    </main>
  );
};

export default App;
