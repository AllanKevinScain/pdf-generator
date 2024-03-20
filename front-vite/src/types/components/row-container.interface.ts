import { ComponentProps, ReactNode } from "react";

type CutDivInterface = ComponentProps<"div">;
export interface RowContainerInterface extends CutDivInterface {
  children: ReactNode;
}
