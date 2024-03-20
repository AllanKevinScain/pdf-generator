import { getCities } from "@brazilian-utils/brazilian-utils";
import { SelectInterface } from "@src/types";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function CitySelect(props: SelectInterface) {
  const {
    label,
    className,
    errormessage,
    isinvalid,
    setFieldValue,
    value,
    disabled,
  } = props;
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [searchCities, setSearchCities] = useState("");
  const [state, setState] = useState("Selecione a cidade");

  const cities = getCities("RS");

  function handleChangeValue() {
    if (!disabled) {
      setIsOpenSelect((s) => !s);
    }
  }

  const filteredCities = cities.filter((i) => {
    if (i.toLowerCase().includes(searchCities.toLowerCase())) return i;
  });

  const aux = filteredCities.length > 0 ? filteredCities : cities;

  return (
    <div className={twMerge("w-full relative", className)}>
      <label className="text-slate-900">{label}</label>
      <div
        onClick={handleChangeValue}
        className={twMerge(
          "relative w-full outline-none rounded-md px-4 pt-2 pb-2 text-slate-600 font-medium transition-all bg-white cursor-pointer placeholder:text-slate-600",
          (isinvalid && "pb-6") ||
            (disabled && "bg-disabled-input cursor-default")
        )}
      >
        {value ? value : state}
        <ChevronDown
          className={twMerge(
            "transition-all absolute top-2 right-2",
            isOpenSelect && "rotate-180"
          )}
        />
      </div>
      <p className="absolute bottom-0 left-4 text-xs text-red-500 font-semibold text-nowrap animate-pulse">
        {isinvalid && errormessage}
      </p>
      {isOpenSelect && (
        <div className="absolute flex flex-col w-full max-h-60 left-0 bg-white z-[1] mt-1 px-2 py-1 rounded-lg scrollbar-y">
          <input
            value={searchCities}
            onChange={(e) => setSearchCities(e.target.value)}
            placeholder="Pesquise sua cidade"
            className="outline-none border-b-2 border-slate-200 p-2"
          />
          {cities.length > 0 &&
            aux.map((i) => (
              <button
                key={i}
                onClick={() => {
                  setState(i);
                  setFieldValue(i);
                  handleChangeValue();
                }}
                className="flex w-full left-0 text-black outline-none hover:border-b-2 py-1 hover:border-primary-500"
              >
                {i}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
