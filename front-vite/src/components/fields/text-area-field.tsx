import { TextAreaFieldInterface } from "@src/types";
import { twMerge } from "tailwind-merge";

export function TextAreaField(props: TextAreaFieldInterface) {
  const { id, label, className, isinvalid, errormessage } = props;

  return (
    <div className={twMerge("w-full relative", className)}>
      <label className="text-slate-900">{label}</label>
      <textarea
        {...props}
        id={id}
        name={id}
        draggable={false}
        rows={4}
        cols={50}
        className={twMerge(
          "w-full outline-none rounded-md px-4 pt-2 pb-2 text-slate-600 transition-all placeholder:text-slate-600",
          isinvalid && "pb-6"
        )}
      />
      <p className="absolute bottom-2 left-4 text-xs text-red-500 font-semibold text-nowrap animate-pulse">
        {isinvalid && errormessage}
      </p>
    </div>
  );
}
