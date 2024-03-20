import { ComponentProps } from "react";

type InputType = ComponentProps<"input">;
export interface TextFieldInterface extends InputType {
  label?: string;
  isinvalid: boolean;
  errormessage?: string;
}

type TextareaType = ComponentProps<"textarea">;
export interface TextAreaFieldInterface extends TextareaType {
  label?: string;
  isinvalid: boolean;
  errormessage?: string;
}
type SelectType = ComponentProps<"select">;
export interface SelectInterface extends SelectType {
  label?: string;
  isinvalid: boolean;
  errormessage?: string;
  setFieldValue: (e: string) => void;
}

export interface FileFieldInterface extends InputType {
  isinvalid: boolean;
  errormessage?: string;
  uploadImage: string;
}
