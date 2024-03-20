import { TextFieldInterface } from "@src/types";
import { twMerge } from "tailwind-merge";

export function TextField(props: TextFieldInterface) {
  const { id, label, className, errormessage, isinvalid } = props;

  return (
    <div className={twMerge("w-full relative", className)}>
      <label className="text-slate-900">{label}</label>
      <input
        {...props}
        id={id}
        name={id}
        className={twMerge(
          "w-full outline-none rounded-md px-4 pt-2 pb-2 text-slate-600 transition-all placeholder:text-slate-600",
          isinvalid && "pb-6"
        )}
      />
      <p className="absolute bottom-0 left-4 text-xs text-red-500 font-semibold text-nowrap animate-pulse">
        {isinvalid && errormessage}
      </p>
    </div>
  );
}
