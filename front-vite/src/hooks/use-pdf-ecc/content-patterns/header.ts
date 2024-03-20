import { CutPdfHeaderEccSchemaType } from "@src/types";

import { title } from "./helpers";

export function header(props: CutPdfHeaderEccSchemaType) {
  return [
    title("ENCONTRO DE CASAIS COM CRISTO - ECC"),
    {
      margin: 0,
      table: {
        widths: ["50%", "50%"],
        body: [
          [`(ARQUI) DIOCESE: ${props.archdiocese}`, `CIDADE: ${props.city}`],
        ],
      },
    },
  ];
}
