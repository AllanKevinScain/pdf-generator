/* eslint-disable @typescript-eslint/no-explicit-any */
import { isEmpty } from "lodash";
import * as Yup from "yup";

const extractImageExtensionFromUrl = (url: string) => {
  if (isEmpty(url)) return "";

  const urlParts = url.split(".");

  return urlParts[urlParts.length - 1];
};

export const fileFormatTest: Yup.TestFunction<any, Yup.AnyObject> = (value) => {
  if (!isEmpty(value)) {
    const supportedFormats = ["jpg", "png"];
    const fileExtension = extractImageExtensionFromUrl(value);

    return supportedFormats.includes(fileExtension);
  }

  return true;
};

export const fileSizeTest: Yup.TestFunction<any, Yup.AnyObject> = (value) => {
  if (!isEmpty(value)) {
    return value.size <= 3145728;
  }

  return true;
};
