import { UsualNameInterface } from "@src/types";

import { text } from ".";

export function photoColumns(values: string[]) {
  return values.map((imageBase64) => {
    return {
      image: imageBase64,
      cover: {
        width: 108,
        height: 110,
        valign: "center",
        align: "center",
      },
      border: [false, false, false, false],
    };
  });
}

export function usualName(props: UsualNameInterface) {
  const { pronoun, usuallyProps, sex } = props;

  const mascule = sex === "m";

  return [
    {
      table: {
        widths: [230, 108],
        body: [
          [
            text({ text: pronoun, border: [true, false, true, false] }),
            text({
              text: `NOME USUAL: ${
                mascule ? usuallyProps?.hisNickname : usuallyProps?.herNickname
              }`,
              fontSize: 7,
              border: [true, false, true, false],
            }),
          ],
        ],
      },
    },
    {
      table: {
        widths: [169, 169],
        body: [
          [
            text({
              text: `NASCIMENTO: ${
                mascule
                  ? usuallyProps?.hisBirthdate
                  : usuallyProps?.herBirthdate
              }`,
              border: [true, true, true, true],
            }),
            [
              text({
                text: `PROFISSÃO: ${
                  mascule
                    ? usuallyProps?.hisProfission
                    : usuallyProps?.herProfission
                }`,
                fontSize: 7,
              }),
              text({
                text: `RELIGIAO: ${
                  mascule
                    ? usuallyProps?.hisReligion
                    : usuallyProps?.herReligion
                }`,
                fontSize: 7,
                border: [true, true, true, false],
              }),
            ],
          ],
        ],
      },
    },
  ];
}
