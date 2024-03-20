export function tableLegends() {
  const legend = [
    "LEGENDA:",
    "A = (ACEITOU)",
    "IC = (INDICADO P/COORD)",
    "C = (COORDENOU)",
    "N = (NÃO ACEITA)",
    "NN = (NÃO ACEITA EQUIPE DE TRABALHO)",
  ];

  const constructedLegends = legend.map((text, index) => {
    if (index === 0) return { text, fontSize: 6 };
    return {
      text,
      color: "gray",
      fontSize: 6,
    };
  });

  const table = { body: [constructedLegends] };

  return table;
}
