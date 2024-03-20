import { CutPdfPersonalAddressEccSchemaType } from "@src/types";
import { Content } from "pdfmake/interfaces";

import { layout, text } from "./helpers";

export function personalAddress(
  props: CutPdfPersonalAddressEccSchemaType
): Content[] {
  return [
    {
      margin: [0, 5, 0, 0],
      table: {
        widths: ["50%", "10%", "10%", "30%"],
        body: [
          [
            text({
              text: `Endereço: ${props.address}`,
              border: [true, true, true, false],
            }),
            text({
              text: `N°: ${props.addressNumber}`,
              border: [true, true, true, false],
            }),
            text({
              text: `APTO: ${props.apartmentNumber}`,
              border: [true, true, true, false],
            }),
            text({
              text: `FONE: ${props.phoneNumber ? props.phoneNumber : "(  )"}`,
              border: [true, true, true, false],
            }),
          ],
        ],
      },
      layout: layout(true),
    },
    {
      margin: 0,
      table: {
        widths: ["33%", "14%", "20%", "33%"],
        body: [
          [
            { text: `Bairro: ${props.district}`, fontSize: 8 },
            { text: `CEP: ${props.cep}`, fontSize: 8 },
            { text: `Cidade/Estado: ${props.cityState}`, fontSize: 8 },
            { text: `Paróquia: ${props.parishAddress}`, fontSize: 8 },
          ],
        ],
      },
      layout: layout(true),
    },
  ];
}
