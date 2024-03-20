import { FormikHelpers, FormikValues } from "formik";

import { PdfEccSchemaType } from "..";

export interface PdfFormInterface
  extends FormikValues,
    FormikHelpers<PdfEccSchemaType> {
  allDisabled?: boolean;
  hasSaveButton?: boolean;
  hasEditButton?: boolean;
}
