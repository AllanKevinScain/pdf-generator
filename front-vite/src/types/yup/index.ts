import { PdfEccSchema } from "@asset/schemas";
import * as Yup from "yup";

type ImageType = {
  images?: {
    her?: string;
    his?: string;
  };
};

export type PdfEccSchemaType = Yup.InferType<typeof PdfEccSchema> & ImageType;
