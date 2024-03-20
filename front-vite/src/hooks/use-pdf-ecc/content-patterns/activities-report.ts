import { spreadActivityReport, text } from "./helpers";

export function activitiesReport() {
  return [
    spreadActivityReport(),
    {
      table: {
        widths: ["100%"],
        heights: [50],
        body: [[text({ text: "OPÇÕES DE TRABALHO" })]],
      },
    },
  ];
}
