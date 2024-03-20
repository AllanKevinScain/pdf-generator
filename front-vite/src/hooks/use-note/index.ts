import { getBaseUrl } from "@src/helpers";
import { PdfEccSchemaType, ResponseInterface } from "@src/types";
import { isEmpty } from "lodash";
import { toast } from "react-hot-toast";

export function useNote() {
  async function getNotes() {
    try {
      const request = await fetch(`${getBaseUrl()}/notes`, {
        method: "GET",
      });

      const promiseResponse = request.json();

      const response = await toast.promise(promiseResponse, {
        loading: "Carregando...",
        success: `Notas Carregadas`,
        error: "Aconteceu algo! Entre em contato com o suporte para verificar!",
      });

      return response;
    } catch (error) {
      console.error(error);
    }
  }
  async function getNote(value: { id: string }) {
    const { id } = value;
    try {
      const request = await fetch(`${getBaseUrl()}/note?id=${id}`, {
        method: "GET",
      });

      const response = await request.json();

      return response;
    } catch (error) {
      console.error(error);
    }
  }
  async function createNote(data: PdfEccSchemaType) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { hisPhoto, herPhoto, images, id, ...rest } = data;

    const hisFile = hisPhoto as File;
    const herFile = herPhoto as File;

    const object = {
      hisContentType: hisFile.type,
      herContentType: herFile.type,
    };

    try {
      const request = await fetch(`${getBaseUrl()}/note`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...rest, ...object }),
      });

      const jsonResponse = request.json();

      const response: ResponseInterface = await toast.promise(jsonResponse, {
        loading: "Criando...",
        success: `Nota criada com sucessso!`,
        error: "Aconteceu um erro!",
      });

      if (
        !isEmpty(response.imageUploadURL?.her) &&
        !isEmpty(response.imageUploadURL?.his)
      ) {
        await fetch(`${response.imageUploadURL?.his}`, {
          method: "PUT",
          headers: {
            "Content-type": hisFile.type,
          },
          body: hisFile,
        });
        await fetch(`${response.imageUploadURL?.her}`, {
          method: "PUT",
          headers: {
            "Content-type": herFile.type,
          },
          body: herFile,
        });
      }

      return response;
    } catch (error) {
      console.error(error);
    }
  }
  async function editNote(values: { id: string; data: PdfEccSchemaType }) {
    const { data, id } = values;
    try {
      const request = fetch(`${getBaseUrl()}/note?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const response = await toast.promise(request, {
        loading: "Editando...",
        success: `Nota ${id} editada!`,
        error: "Aconteceu um erro!",
      });

      return response;
    } catch (error) {
      console.error(error);
    }
  }
  async function deleteNote(value: string) {
    try {
      const request = fetch(`${getBaseUrl()}/delete-note?id=${value}`, {
        method: "DELETE",
      });

      const response = await toast.promise(request, {
        loading: "Apagando...",
        success: `Nota ${value} deletada!`,
        error: "Aconteceu um erro!",
      });

      return response;
    } catch (error) {
      console.error(error);
    }
  }

  return {
    createNote,
    getNote,
    getNotes,
    editNote,
    deleteNote,
  };
}
