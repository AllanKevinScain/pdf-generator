import { RowContainerInterface } from "@src/types";
import { twMerge } from "tailwind-merge";

export function RowContainer(props: RowContainerInterface) {
  const { children, className } = props;

  return (
    <div {...props} className={twMerge("flex gap-4 w-full", className)}>
      {children}
    </div>
  );
}
