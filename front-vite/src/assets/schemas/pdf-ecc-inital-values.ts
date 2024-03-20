import * as Yup from "yup";

import { fileFormatTest, fileSizeTest, validatePhoneNumber } from "./helpers";

export const PdfEccSchema = Yup.object().shape({
  archdiocese: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  city: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  parish: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  hisName: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  hisNickname: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  hisBirthdate: Yup.date().required("Campo obrigatório!"),
  hisProfission: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  hisReligion: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  herName: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  herNickname: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  herBirthdate: Yup.date().required("Campo obrigatório!"),
  herProfission: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  herReligion: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  marriageReligious: Yup.bool(),
  whichParish: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  address: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  district: Yup.string().required("Campo obrigatório!"),
  cep: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  cityState: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  parishAddress: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45)
    .required("Campo obrigatório!"),
  addressNumber: Yup.string().max(6).required("Campo obrigatório!"),
  apartmentNumber: Yup.string().max(6),
  phoneNumber: Yup.string()
    .test({ name: "phoneNumber", test: validatePhoneNumber })
    .required("Campo obrigatório!"),
  hisProfessionalAddress: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45),
  hisProfessionalPhoneNumber: Yup.string().test({
    name: "phoneNumber",
    test: validatePhoneNumber,
  }),
  dateWedding: Yup.date().required("Campo obrigatório!"),
  herProfessionalAddress: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(45),
  herProfessionalPhoneNumber: Yup.string().test({
    name: "phoneNumber",
    test: validatePhoneNumber,
  }),
  numberOfChildren: Yup.string().max(2).required("Campo obrigatório!"),
  numberFirstStep: Yup.string().max(4),
  dateFirstStep: Yup.date(),
  localFirstStep: Yup.string().min(3, "No mínimo 3 caracteres!").max(45),
  activitiesFirstStage: Yup.string().min(3, "No mínimo 3 caracteres!").max(45),
  numberSecondStep: Yup.string().max(4),
  dateSecondStep: Yup.date(),
  localSecondStep: Yup.string().min(3, "No mínimo 3 caracteres!").max(45),
  activitiesSecondStage: Yup.string().min(3, "No mínimo 3 caracteres!").max(45),
  numberThirdStep: Yup.string().max(4),
  dateThirdStep: Yup.date(),
  localThirdStep: Yup.string().min(3, "No mínimo 3 caracteres!").max(45),
  activitiesThirdStage: Yup.string().min(3, "No mínimo 3 caracteres!").max(45),
  engagementParish: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(300, "São permitidas no máximo 300 caracteres!")
    .required("Campo obrigatório!"),
  habilities: Yup.string()
    .min(3, "No mínimo 3 caracteres!")
    .max(300, "São permitidas no máximo 300 caracteres!")
    .required("Campo obrigatório!"),
  hisPhoto: Yup.mixed()
    .test({
      name: "fileFormat",
      message: "Formato inválido (Apenas JPG e PNG)",
      test: fileFormatTest,
    })
    .test({
      name: "fileSize",
      message: "O tamanho deve ser menor que 3MB",
      test: fileSizeTest,
    })
    .required("Campo obrigatório!"),
  herPhoto: Yup.mixed()
    .test({
      name: "fileFormat",
      message: "Formato inválido (Apenas JPG e PNG)",
      test: fileFormatTest,
    })
    .test({
      name: "fileSize",
      message: "O tamanho deve ser menor que 3MB",
      test: fileSizeTest,
    })
    .required("Campo obrigatório!"),
  created_at: Yup.date(),
  id: Yup.string(),
});
