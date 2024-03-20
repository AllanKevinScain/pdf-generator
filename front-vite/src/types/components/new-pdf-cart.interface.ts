import { PdfEccSchemaType } from "..";

export interface NewPdfCardInterface {
  saveNote: (pdf: PdfEccSchemaType) => void;
}
