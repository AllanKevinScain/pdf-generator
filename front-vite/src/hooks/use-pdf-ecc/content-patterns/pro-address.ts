import { CutPdfProAddressEccSchemaType } from "@src/types";
import { Content } from "pdfmake/interfaces";

import { layout, text, title } from "./helpers";

export function proAddress(props: CutPdfProAddressEccSchemaType): Content[] {
  return [
    title("ENDEREÇO PROFISSIONAL"),
    {
      margin: 0,
      table: {
        widths: ["60%", "30%", "10%"],
        body: [
          [
            text({
              text: `ELE: ${props.hisProfessionalAddress}`,
              border: [true, true, true, false],
            }),
            text({
              text: `FONE: ${
                props.hisProfessionalPhoneNumber
                  ? props.hisProfessionalPhoneNumber
                  : "(  )"
              }`,
              border: [true, true, true, false],
            }),
            text({
              text: `DATA-CASAM: ${props.dateWedding}`,
              border: [true, true, true, false],
            }),
          ],
        ],
      },
      layout: layout(true),
    },
    {
      margin: [0, 0, 0, 5],
      table: {
        widths: ["60%", "30%", "10%"],
        body: [
          [
            text({ text: `ELA: ${props.herProfessionalAddress}` }),
            text({
              text: `FONE: ${
                props.herProfessionalPhoneNumber
                  ? props.herProfessionalPhoneNumber
                  : "(  )"
              }`,
            }),
            text({ text: `N°FILHOS: ${props.numberOfChildren}` }),
          ],
        ],
      },
      layout: layout(true),
    },
  ];
}
