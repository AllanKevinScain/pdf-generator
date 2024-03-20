function spreadActivityReportColmun(value: string) {
  const width = new Array(23).fill(null).map((_, index) => {
    if (index === 0) return 85;

    return "*";
  });
  const rows = new Array(23).fill(null).map((_, index) => {
    if (index === 0)
      return {
        text: value,
        fontSize: 8,
        border: [true, true, true, false],
      };

    return {
      text: "",
      fontSize: 8,
      border: [true, true, true, false],
    };
  });

  return { widths: [...width], body: [rows] };
}

export function spreadActivityReport() {
  const columns = [
    "EQ TRABALHO/N°ECC",
    "COORD GERAL",
    "SALA",
    "LITURGIA/VIGILIA",
    "CIRCULOS",
    "CAFÉ E MINIMERCADO",
    "COZINHA",
    "ORDEM E LIMPEZA",
    "VISITAÇÃO",
    "ACOLHIDA",
    "SECRETARIA",
    "COMPRAS",
    "PALESTRAS",
    "#",
    "#",
    "#",
  ];

  return columns.map((e) => {
    return {
      margin: 0,
      table: spreadActivityReportColmun(e),
      layout: {
        defaultBorder: true,
      },
    };
  });
}
