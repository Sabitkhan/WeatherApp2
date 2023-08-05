import Forecast from "./components/Forecast";
import Search from "./components/Search";
import useForecast from "./hooks/useForecast";



const App = () => {
  const {
    term,
    option,
    onInputChange,
    onsubmit,
    onOptionSelect,
    error,
    forecast,
  } = useForecast();
  return (
    <main className="flex justify-center items-center bg-gradient-to-br  from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      {forecast ? (
        <Forecast data={forecast} />
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
