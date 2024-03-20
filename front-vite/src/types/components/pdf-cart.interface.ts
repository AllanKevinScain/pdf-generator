import { PdfEccSchemaType } from "..";

export interface PdfCardInterface extends PdfEccSchemaType {
  onDownloadPdf: (id: string) => void;
  onDeleteNote: (id: string) => void;
}
