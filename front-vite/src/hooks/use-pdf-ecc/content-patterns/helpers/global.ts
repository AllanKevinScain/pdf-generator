import { Content } from "pdfmake/interfaces";

import { ContentPatternHelperTextInterface } from "@/src/types";

export function text(props: ContentPatternHelperTextInterface) {
  const { text, border, fontSize = 8, color } = props;
  return {
    text,
    fontSize,
    color,
    border,
  };
}

export function layout(defaultBorder: boolean) {
  return {
    defaultBorder,
  };
}

export function title(title: string): Content {
  return {
    table: {
      widths: ["100%"],
      body: [[title]],
    },
    alignment: "center",
    layout: "noBorders",
  };
}
