import { CitySelect } from "./city-select";
import { DateField } from "./date-field";
import { Filefield } from "./file-field";
import { TextAreaField } from "./text-area-field";
import { TextField } from "./text-field";

export const Input = {
  area: TextAreaField,
  default: TextField,
  citySelect: CitySelect,
  file: Filefield,
  date: DateField,
};
