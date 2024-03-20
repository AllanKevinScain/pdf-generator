import { CutPdfDescriptionEccSchemaType } from "@src/types";

import { layout, text } from "./helpers";

export function description(props: CutPdfDescriptionEccSchemaType) {
  return [
    {
      margin: 0,
      table: {
        widths: ["100%"],
        heights: [40],
        body: [
          [
            text({
              text: `ENGAJAMENTO PAROQUIAL\n${props.engagementParish}`,
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
        widths: ["100%"],
        heights: [70],
        body: [[text({ text: `HABILIDADES\n${props.habilities}` })]],
      },
    },
  ];
}
