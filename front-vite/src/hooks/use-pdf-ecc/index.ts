import * as pdfFonts from "@src/helpers/pdfmakefont"; // 👈 local import
import { UsePdfEccInterface } from "@src/types";
import { isEmptyArray } from "formik";
import pdfMake from "pdfmake/build/pdfmake";
import { TDocumentDefinitions } from "pdfmake/interfaces";

import { createImageFileFromUrl, filesToBase64 } from "@/src/helpers";

import {
  activitiesReport,
  assembly,
  description,
  header,
  personalAddress,
  phases,
  proAddress,
  terms,
  title,
} from "./content-patterns";

export function usePdfEcc(props: UsePdfEccInterface) {
  const { pdfs } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (<any>pdfMake).vfs = pdfFonts.default;

  async function createPdf(value: string) {
    if (!isEmptyArray(pdfs)) {
      const filteredPdf = pdfs.filter((i) => i.id === value)[0];
      const { images, ...rest } = filteredPdf;

      const files = [
        await createImageFileFromUrl(`${images?.his}`),
        await createImageFileFromUrl(`${images?.her}`),
      ];

      const base64Files = await filesToBase64(files);

      const docDefiitions: TDocumentDefinitions = {
        pageSize: "A4",
        pageMargins: [10, 10, 10, 10],
        header: [],
        content: [
          /* Cabeçalho */
          ...header(filteredPdf),
          /* Montagem */
          ...assembly({
            ...rest,
            images: { his: base64Files[0], her: base64Files[1] },
          }),
          /* address Pessoal */
          ...personalAddress(filteredPdf),
          /* address Profissional */
          ...proAddress(filteredPdf),
          /* Etapas */
          phases({
            value: "ECC - 1ª ETAPA",
            data: {
              activity: filteredPdf.activitiesFirstStage,
              date: filteredPdf.dateFirstStep,
              local: filteredPdf.localFirstStep,
              phasenumber: filteredPdf.numberFirstStep,
            },
          }),
          phases({
            value: "ECC - 2ª ETAPA",
            data: {
              activity: filteredPdf.activitiesFirstStage,
              date: filteredPdf.dateFirstStep,
              local: filteredPdf.localFirstStep,
              phasenumber: filteredPdf.numberSecondStep,
            },
          }),
          phases({
            value: "ECC - 3ª ETAPA",
            data: {
              activity: filteredPdf.activitiesFirstStage,
              date: filteredPdf.dateFirstStep,
              local: filteredPdf.localFirstStep,
              phasenumber: filteredPdf.numberThirdStep,
            },
          }),
          /* Descrição do casal */
          ...description(filteredPdf),
          /* Relatório de atividades */
          title("RELATÓRIO DE ATIVIDADES"),
          ...activitiesReport(),
          /* Termos */
          ...terms(),
        ],
        footer: [],
      };

      pdfMake.createPdf(docDefiitions).download();
    }
  }

  return {
    createPdf,
  };
}
