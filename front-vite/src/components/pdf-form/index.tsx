import { formatCEP } from "@brazilian-utils/brazilian-utils";
import { Input, RowContainer } from "@src/components";
import { formatPhone } from "@src/helpers";
import { PdfFormInterface } from "@src/types";

export function PdfForm(props: PdfFormInterface) {
  const {
    handleSubmit,
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    setFieldValue,
    allDisabled = false,
    hasEditButton = false,
    hasSaveButton = false,
  } = props;

  return (
    <form
      className="flex flex-col gap-4 p-12 scrollbar-y"
      onSubmit={handleSubmit}
    >
      <RowContainer className="flex-col border rounded-lg p-1">
        <h1 className="flex justify-center">
          ENCONTRO DE CASAIS COM CRISTO - ECC
        </h1>
        <RowContainer>
          <Input.default
            id="archdiocese"
            disabled={allDisabled}
            value={values.archdiocese}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.archdiocese}
            isinvalid={!!errors.archdiocese && touched.archdiocese!}
            placeholder="(Arqui) Diocese"
          />
          <Input.citySelect
            disabled={allDisabled}
            value={values.city}
            setFieldValue={(e) => setFieldValue("city", e)}
            errormessage={errors.city}
            isinvalid={!!errors.city && touched.city!}
          />
        </RowContainer>
        <Input.default
          id="parish"
          disabled={allDisabled}
          value={values.parish}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.parish}
          isinvalid={!!errors.parish && touched.parish!}
          placeholder="Paróquia"
        />
      </RowContainer>

      <RowContainer className="flex-col border rounded-lg p-1">
        <RowContainer>
          <Input.default
            id="hisName"
            disabled={allDisabled}
            value={values.hisName}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.hisName}
            isinvalid={!!errors.hisName && touched.hisName!}
            placeholder="Ele"
          />
          <Input.default
            id="hisNickname"
            disabled={allDisabled}
            value={values.hisNickname}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.hisNickname}
            isinvalid={!!errors.hisNickname && touched.hisNickname!}
            placeholder="Nome usual"
          />
        </RowContainer>

        <RowContainer>
          <Input.date
            id="hisBirthdate"
            disabled={allDisabled}
            value={values.hisBirthdate}
            onChange={handleChange}
            maxLength={10}
            onBlur={handleBlur}
            errormessage={errors.hisBirthdate}
            isinvalid={!!errors.hisBirthdate && touched.hisBirthdate!}
            placeholder="Nascimento"
          />
          <Input.default
            id="hisProfission"
            disabled={allDisabled}
            value={values.hisProfission}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.hisProfission}
            isinvalid={!!errors.hisProfission && touched.hisProfission!}
            placeholder="Profissão"
          />
          <Input.default
            id="hisReligion"
            disabled={allDisabled}
            value={values.hisReligion}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.hisReligion}
            isinvalid={!!errors.hisReligion && touched.hisReligion!}
            placeholder="Religião"
          />
        </RowContainer>
      </RowContainer>

      <RowContainer className="flex-col border rounded-lg p-1">
        <RowContainer>
          <Input.default
            id="herName"
            disabled={allDisabled}
            value={values.herName}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.herName}
            isinvalid={!!errors.herName && touched.herName!}
            placeholder="Ela"
          />
          <Input.default
            id="herNickname"
            disabled={allDisabled}
            value={values.herNickname}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.herNickname}
            isinvalid={!!errors.herNickname && touched.herNickname!}
            placeholder="Nome usual"
          />
        </RowContainer>

        <RowContainer>
          <Input.date
            id="herBirthdate"
            disabled={allDisabled}
            value={values.herBirthdate}
            onChange={handleChange}
            maxLength={10}
            onBlur={handleBlur}
            errormessage={errors.herBirthdate}
            isinvalid={!!errors.herBirthdate && touched.herBirthdate!}
            placeholder="Nascimento"
          />
          <Input.default
            id="herProfission"
            disabled={allDisabled}
            value={values.herProfission}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.herProfission}
            isinvalid={!!errors.herProfission && touched.herProfission!}
            placeholder="Profissão"
          />
          <Input.default
            id="herReligion"
            disabled={allDisabled}
            value={values.herReligion}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.herReligion}
            isinvalid={!!errors.herReligion && touched.herReligion!}
            placeholder="Religião"
          />
        </RowContainer>
      </RowContainer>

      <RowContainer className="flex-col border rounded-lg p-1">
        <RowContainer>
          <span className="text-nowrap">Casamento Relgioso</span>
          <input
            id="marriageReligious"
            name="marriageReligious"
            disabled={allDisabled}
            type="checkbox"
            checked={values.marriageReligious}
            onChange={handleChange}
          />
        </RowContainer>
        <Input.default
          id="whichParish"
          disabled={allDisabled}
          value={values.whichParish}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.whichParish}
          isinvalid={!!errors.whichParish && touched.whichParish!}
          placeholder="Qual paróquia aconteceu o casamento?"
        />
      </RowContainer>

      <RowContainer className="flex-col border rounded-lg p-1">
        <Input.default
          id="address"
          disabled={allDisabled}
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.address}
          isinvalid={!!errors.address && touched.address!}
          placeholder="Endereço"
        />
        <Input.default
          id="parishAddress"
          disabled={allDisabled}
          value={values.parishAddress}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.parishAddress}
          isinvalid={!!errors.parishAddress && touched.parishAddress!}
          placeholder="Paróquia"
        />
        <Input.default
          id="district"
          disabled={allDisabled}
          value={values.district}
          onChange={handleChange}
          onBlur={handleBlur}
          max={4}
          errormessage={errors.district}
          isinvalid={!!errors.district && touched.district!}
          placeholder="Bairro"
        />
        <RowContainer>
          <Input.default
            id="phoneNumber"
            disabled={allDisabled}
            value={values.phoneNumber}
            onChange={(e) =>
              setFieldValue("phoneNumber", formatPhone(e.target.value))
            }
            onBlur={handleBlur}
            errormessage={errors.phoneNumber}
            isinvalid={!!errors.phoneNumber && touched.phoneNumber!}
            placeholder="Telefone"
          />
          <Input.citySelect
            disabled={allDisabled}
            value={values.cityState}
            setFieldValue={(e) => setFieldValue("cityState", e)}
            errormessage={errors.cityState}
            isinvalid={!!errors.cityState && touched.cityState!}
          />
        </RowContainer>
        <RowContainer>
          <Input.default
            id="cep"
            disabled={allDisabled}
            value={values.cep}
            onChange={(e) => setFieldValue("cep", formatCEP(e.target.value))}
            onBlur={handleBlur}
            errormessage={errors.cep}
            isinvalid={!!errors.cep && touched.cep!}
            placeholder="Cep"
          />
          <Input.default
            id="addressNumber"
            disabled={allDisabled}
            value={values.addressNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            max={4}
            errormessage={errors.addressNumber}
            isinvalid={!!errors.addressNumber && touched.addressNumber!}
            placeholder="Número"
          />
          <Input.default
            id="apartmentNumber"
            disabled={allDisabled}
            value={values.apartmentNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            max={6}
            errormessage={errors.apartmentNumber}
            isinvalid={!!errors.apartmentNumber && touched.apartmentNumber!}
            placeholder="Apart"
          />
        </RowContainer>
      </RowContainer>

      <RowContainer className="flex-col border rounded-lg p-1">
        <h2 className="flex justify-center">ENDEREÇO PROFISSIONAL</h2>
        <RowContainer>
          <Input.default
            id="hisProfessionalAddress"
            disabled={allDisabled}
            value={values.hisProfessionalAddress}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.hisProfessionalAddress}
            isinvalid={
              !!errors.hisProfessionalAddress && touched.hisProfessionalAddress!
            }
            placeholder="Endereço dele"
          />
          <Input.default
            id="hisProfessionalPhoneNumber"
            disabled={allDisabled}
            value={values.hisProfessionalPhoneNumber}
            onChange={(e) =>
              setFieldValue(
                "hisProfessionalPhoneNumber",
                formatPhone(e.target.value)
              )
            }
            onBlur={handleBlur}
            errormessage={errors.hisProfessionalPhoneNumber}
            isinvalid={
              !!errors.hisProfessionalPhoneNumber &&
              touched.hisProfessionalPhoneNumber!
            }
            placeholder="Telefone"
          />
          <Input.date
            id="dateWedding"
            disabled={allDisabled}
            value={values.dateWedding}
            onChange={handleChange}
            maxLength={10}
            onBlur={handleBlur}
            errormessage={errors.dateWedding}
            isinvalid={!!errors.dateWedding && touched.dateWedding!}
            placeholder="Data do casamento"
          />
        </RowContainer>
        <RowContainer>
          <Input.default
            id="herProfessionalAddress"
            disabled={allDisabled}
            value={values.herProfessionalAddress}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.herProfessionalAddress}
            isinvalid={
              !!errors.herProfessionalAddress && touched.herProfessionalAddress!
            }
            placeholder="Endereço dela"
          />
          <Input.default
            id="herProfessionalPhoneNumber"
            disabled={allDisabled}
            value={values.herProfessionalPhoneNumber}
            onChange={(e) =>
              setFieldValue(
                "herProfessionalPhoneNumber",
                formatPhone(e.target.value)
              )
            }
            onBlur={handleBlur}
            errormessage={errors.herProfessionalPhoneNumber}
            isinvalid={
              !!errors.herProfessionalPhoneNumber &&
              touched.herProfessionalPhoneNumber!
            }
            placeholder="Telefone"
          />
          <Input.default
            id="numberOfChildren"
            disabled={allDisabled}
            value={values.numberOfChildren}
            onChange={handleChange}
            onBlur={handleBlur}
            errormessage={errors.numberOfChildren}
            isinvalid={!!errors.numberOfChildren && touched.numberOfChildren!}
            placeholder="Número de filhos"
          />
        </RowContainer>
      </RowContainer>

      <RowContainer className="flex-col border rounded-lg p-1">
        <h2 className="flex justify-center">ECC 1ª ETAPA</h2>
        <Input.default
          id="numberFirstStep"
          disabled={allDisabled}
          value={values.numberFirstStep}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.numberFirstStep}
          isinvalid={!!errors.numberFirstStep && touched.numberFirstStep!}
          placeholder="Número do curso"
        />
        <Input.date
          id="dateFirstStep"
          disabled={allDisabled}
          value={values.dateFirstStep}
          onChange={handleChange}
          maxLength={10}
          onBlur={handleBlur}
          errormessage={errors.dateFirstStep}
          isinvalid={!!errors.dateFirstStep && touched.dateFirstStep!}
          placeholder="Data"
        />
        <Input.default
          id="localFirstStep"
          disabled={allDisabled}
          value={values.localFirstStep}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.localFirstStep}
          isinvalid={!!errors.localFirstStep && touched.localFirstStep!}
          placeholder="Local"
        />
        <Input.default
          id="activitiesFirstStage"
          disabled={allDisabled}
          value={values.activitiesFirstStage}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.activitiesFirstStage}
          isinvalid={
            !!errors.activitiesFirstStage && touched.activitiesFirstStage!
          }
          placeholder="Atividades"
        />
      </RowContainer>

      <RowContainer className="flex-col border rounded-lg p-1">
        <h2 className="flex justify-center">ECC 2ª ETAPA</h2>
        <Input.default
          id="numberSecondStep"
          disabled={allDisabled}
          value={values.numberSecondStep}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.numberSecondStep}
          isinvalid={!!errors.numberSecondStep && touched.numberSecondStep!}
          placeholder="Número do curso"
        />
        <Input.date
          id="dateSecondStep"
          disabled={allDisabled}
          value={values.dateSecondStep}
          onChange={handleChange}
          maxLength={10}
          onBlur={handleBlur}
          errormessage={errors.dateSecondStep}
          isinvalid={!!errors.dateSecondStep && touched.dateSecondStep!}
          placeholder="Data"
        />
        <Input.default
          id="localSecondStep"
          disabled={allDisabled}
          value={values.localSecondStep}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.localSecondStep}
          isinvalid={!!errors.localSecondStep && touched.localSecondStep!}
          placeholder="Local"
        />
        <Input.default
          id="activitiesSecondStage"
          disabled={allDisabled}
          value={values.activitiesSecondStage}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.activitiesSecondStage}
          isinvalid={
            !!errors.activitiesSecondStage && touched.activitiesSecondStage!
          }
          placeholder="Atividades"
        />
      </RowContainer>

      <RowContainer className="flex-col border rounded-lg p-1">
        <h2 className="flex justify-center">ECC 3ª ETAPA</h2>
        <Input.default
          id="numberThirdStep"
          disabled={allDisabled}
          value={values.numberThirdStep}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.numberThirdStep}
          isinvalid={!!errors.numberThirdStep && touched.numberThirdStep!}
          placeholder="Número do curso"
        />
        <Input.date
          id="dateThirdStep"
          disabled={allDisabled}
          value={values.dateThirdStep}
          onChange={handleChange}
          maxLength={10}
          onBlur={handleBlur}
          errormessage={errors.dateThirdStep}
          isinvalid={!!errors.dateThirdStep && touched.dateThirdStep!}
          placeholder="Data"
        />
        <Input.default
          id="localThirdStep"
          disabled={allDisabled}
          value={values.localThirdStep}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.localThirdStep}
          isinvalid={!!errors.localThirdStep && touched.localThirdStep!}
          placeholder="Local"
        />
        <Input.default
          id="activitiesThirdStage"
          disabled={allDisabled}
          value={values.activitiesThirdStage}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.activitiesThirdStage}
          isinvalid={
            !!errors.activitiesThirdStage && touched.activitiesThirdStage!
          }
          placeholder="Atividades"
        />
      </RowContainer>

      <RowContainer className="flex-col border rounded-lg p-1">
        <Input.area
          id="engagementParish"
          disabled={allDisabled}
          value={values.engagementParish}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.engagementParish}
          isinvalid={!!errors.engagementParish && touched.engagementParish!}
          placeholder="Engajamento paroquial"
        />
        <Input.area
          id="habilities"
          disabled={allDisabled}
          value={values.habilities}
          onChange={handleChange}
          onBlur={handleBlur}
          errormessage={errors.habilities}
          isinvalid={!!errors.habilities && touched.habilities!}
          placeholder="Habilidades"
        />
      </RowContainer>

      <RowContainer className="border rounded-lg p-1">
        <Input.file
          id="hisPhoto"
          uploadImage={values.images.his}
          errormessage={errors.hisPhoto}
          placeholder="Imagem dele"
          value={values.hisPhoto}
          onChange={(e) => {
            const target = e.target as HTMLInputElement & {
              files: File;
            };

            setFieldValue("hisPhoto", target.files[0]);
          }}
          onBlur={handleBlur}
          isinvalid={!!errors.hisPhoto && touched.hisPhoto}
          disabled={allDisabled}
        />
        <Input.file
          id="herPhoto"
          uploadImage={values.images.her}
          errormessage={errors.herPhoto}
          placeholder="Imagem dela"
          value={values.herPhoto}
          onChange={(e) => {
            const target = e.target as HTMLInputElement & {
              files: File;
            };

            setFieldValue("herPhoto", target.files[0]);
          }}
          onBlur={handleBlur}
          isinvalid={!!errors.herPhoto && touched.herPhoto}
          disabled={allDisabled}
        />
      </RowContainer>

      <b className="text-xs">
        OBS: relatórios de atividades precisam ser registrados a mão
      </b>
      {hasSaveButton && (
        <button
          type="submit"
          className="bg-logo-1 text-slate-900 hover:ring-2 hover:ring-primary-600 rounded-lg py-2"
        >
          Cadastrar ficha
        </button>
      )}
      {hasEditButton && (
        <button
          type="submit"
          className="bg-logo-1 text-slate-900 hover:ring-2 hover:ring-primary-600 rounded-lg py-2"
        >
          Cadastrar ficha
        </button>
      )}
    </form>
  );
}
