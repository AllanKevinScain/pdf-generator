import { PdfEccSchemaType } from "..";
export interface UsePdfEccInterface {
  pdfs: PdfEccSchemaType[];
}

export type CutPdfHeaderEccSchemaType = Pick<
  PdfEccSchemaType,
  "archdiocese" | "city"
>;

export type CutPdfAssemblyEccSchemaType = Pick<
  PdfEccSchemaType,
  | "parish"
  | "hisName"
  | "herName"
  | "marriageReligious"
  | "whichParish"
  | "hisNickname"
  | "herNickname"
  | "hisBirthdate"
  | "herBirthdate"
  | "hisProfission"
  | "herProfission"
  | "hisReligion"
  | "herReligion"
  | "images"
>;

type CutUsualNameEccSchemaType = Pick<
  CutPdfAssemblyEccSchemaType,
  | "hisNickname"
  | "herNickname"
  | "hisBirthdate"
  | "herBirthdate"
  | "hisProfission"
  | "herProfission"
  | "hisReligion"
  | "herReligion"
>;
export interface UsualNameInterface {
  pronoun: string;
  sex: "m" | "f";
  usuallyProps?: CutUsualNameEccSchemaType;
}

export type CutPdfDescriptionEccSchemaType = Pick<
  PdfEccSchemaType,
  "engagementParish" | "habilities"
>;

export type CutPdfPersonalAddressEccSchemaType = Pick<
  PdfEccSchemaType,
  | "address"
  | "addressNumber"
  | "apartmentNumber"
  | "phoneNumber"
  | "district"
  | "cep"
  | "cityState"
  | "parishAddress"
>;

export type CutPdfProAddressEccSchemaType = Pick<
  PdfEccSchemaType,
  | "hisProfessionalAddress"
  | "hisProfessionalPhoneNumber"
  | "dateWedding"
  | "herProfessionalAddress"
  | "herProfessionalPhoneNumber"
  | "numberOfChildren"
>;

export interface ContentPatternHelperTextInterface {
  text: string;
  fontSize?: number;
  color?: string;
  border?: boolean[];
}
export interface ContentPatternHelperPhaseInterface {
  value: string;
  data: {
    phasenumber?: string;
    local?: string;
    activity?: string;
    date?: string;
  };
}
