import { ContentPatternHelperPhaseInterface } from "@/src/types";

import { layout, text } from ".";

export function phases(props: ContentPatternHelperPhaseInterface) {
  const { value, data } = props;
  const { activity, local, phasenumber, date } = data;
  return {
    margin: 0,
    table: {
      widths: ["20%", "10%", "10%", "20%", "40%"],
      body: [
        [
          text({
            text: value,
            fontSize: 10,
            border: [true, true, true, false],
          }),
          text({
            text: `N°: ${phasenumber}`,
            border: [true, true, true, false],
          }),
          text({ text: `DATA: ${date}`, border: [true, true, true, false] }),
          text({ text: `LOCAL: ${local}`, border: [true, true, true, false] }),
          text({
            text: `ATIVIDADES: ${activity}`,
            border: [true, true, true, false],
          }),
        ],
      ],
    },
    layout: layout(true),
  };
}
