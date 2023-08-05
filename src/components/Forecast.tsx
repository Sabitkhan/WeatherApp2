import { forecastData } from "../interfaces";
interface props {
  data: forecastData;
}
const Forecast = ({ data }: props) => {
  const Degree = ({ temp }: { temp: number }) => {
    return (
      <span>
        {temp}<sup>o</sup>
      </span>
    );
  };
  const today = data.list[0];
  return (
    <div className="w-full md:max-w-[500px] py-4 md:py-10 md:px-10 lg:px-24 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg ">
      <div className="mx-auto w-[300px]">
        <section className="text-center">
          <h2 className="text-2xl font-black">
            {data.name} <span className="font-thin">{data.country}</span>
          </h2>
          <h1 className="text-4xl font-extrabold">
            <Degree temp={Math.round(today.main.temp)} />
          </h1>
        </section>
      </div>
    </div>
  );
};

export default Forecast;
