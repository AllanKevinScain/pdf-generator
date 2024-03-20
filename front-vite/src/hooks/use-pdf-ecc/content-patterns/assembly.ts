import { CutPdfAssemblyEccSchemaType } from "@src/types";

import { layout, photoColumns, text, title, usualName } from "./helpers";

export function assembly(props: CutPdfAssemblyEccSchemaType) {
  const { images } = props;
  return [
    title("FICHA DE MONTAGEM DO ECC (Registro de Casais)"),
    {
      margin: 0,
      table: {
        widths: [200],
        body: [
          [
            {
              margin: [-8, -4, null, -4],
              table: {
                widths: [90, 100, 0.5, "100%"],
                heights: [70, 70, 70, 70],
                body: [
                  [
                    ...photoColumns([`${images?.his}`, `${images?.her}`]),
                    {
                      text: "",
                    },
                    [
                      {
                        table: {
                          widths: [347],
                          body: [[text({ text: `Paróquia: ${props.parish}` })]],
                        },
                      },
                      ...usualName({
                        pronoun: `ELE: ${props.hisName}`,
                        sex: "m",
                        usuallyProps: props,
                      }),
                      ...usualName({
                        pronoun: `ELA: ${props.herName}`,
                        sex: "f",
                        usuallyProps: props,
                      }),
                      {
                        table: {
                          widths: [169, 169],
                          body: [
                            [
                              text({
                                text: `CASAMENTO RELIGIOSO: ${
                                  props.marriageReligious ? "SIM" : "NÃO"
                                }`,
                                border: [true, false, true, true],
                              }),
                              text({
                                text: `QUAL A PARÓQUIA: ${props.whichParish}`,
                                border: [true, false, true, true],
                              }),
                            ],
                          ],
                        },
                      },
                    ],
                  ],
                ],
              },
              layout: layout(false),
            },
          ],
        ],
      },
      layout: layout(true),
    },
  ];
}
