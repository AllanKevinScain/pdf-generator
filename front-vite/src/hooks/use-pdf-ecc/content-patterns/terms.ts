import { Content } from "pdfmake/interfaces";

import { layout, tableLegends } from "./helpers";

export function terms(): Content[] {
  return [
    {
      margin: [-4, 0, 0, 0],
      table: tableLegends(),
      layout: layout(false),
    },
    {
      text: "TRANSCREVER PARA ESTE FORMULÁRIO OS DADOS PARA A FICHA DE INSCRIÇÃO DA FICHA DE habilities E OPÇÕES DE TRABALHO E DOS QUADRANTES.",
      fontSize: 6,
    },
  ];
}
