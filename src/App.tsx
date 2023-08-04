import axios, { CanceledError } from "axios";
import { ChangeEvent, useEffect, useState } from "react";

interface Option {
  name: string;
  lat: number;
  lon: number;
}
const App = () => {
  const [term, setTerm] = useState<string>("");
  const [error, setError] = useState("");
  const [option, setOption] = useState<Option[]>([]);
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
    // console.log(term);
  };
  const onOptionSelect = (option: Option) => {
    console.log(option.name);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          option.lat
        }&lon=${
          option.lon
        }&units=metric&appid=${"8f80c01abdfcb585cbb43645e7b10956"}`
      )
      .then((res) => console.log(res.data))
      .catch((err) => setError(err));
  };
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<Option[]>(
        `http://api.openweathermap.org/geo/1.0/direct?q=${term.trim()}&limit=5&appid=${"8f80c01abdfcb585cbb43645e7b10956"}`,
        { signal: controller.signal }
      )
      .then((res) => setOption(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err);
      });
  }, [term]);
  return (
    <main className="flex justify-center items-center bg-gradient-to-br  from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-10 backdrop-blur-lg rounded drop-shadow-lg text-zinc-700">
        <h1 className="text-4xl font-thin">
          Weather <span className="font-black"> Forecast </span>
        </h1>
        <p className="text-sm mt-2">
          Enter below a place you want to know the weather of and select an
          option from the dropdown
        </p>

        <div className="relative flex mt-10 md:mt-4">
          <input
            type="text"
            onChange={onInputChange}
            value={term}
            className="px-2 py-1 rounded-l-md border-2 border-white"
          />
          <ul className="absolute top-9 bg-white  rounded-b-md">
            {option.map((option, index) => (
              <li key={index}>
                <button
                  className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer "
                  onClick={() => onOptionSelect(option)}
                >
                  {option.name}
                </button>
              </li>
            ))}
          </ul>
          <button className="rounded-r-md border-2 border-zinc-200 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer">
            search
          </button>
        </div>
      </section>
    </main>
  );
};

export default App;
