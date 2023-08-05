import { ChangeEvent } from "react";
import { Option } from "../interfaces";
interface Props {
  term: string;
  option: Option[];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (option: Option) => void;
  onSubmit: () => void;
  error: string;
}
const Search = ({
  term,
  option,
  onInputChange,
  onOptionSelect,
  onSubmit,
  error,
}: Props) => {
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
        {error && <p className="text-red-700">{error}</p>}

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
          <button
            className="rounded-r-md border-2 border-zinc-200 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer"
            onClick={onSubmit}
          >
            search
          </button>
        </div>
      </section>
    </main>
  );
};

export default Search;
