import { isEmpty } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import {
  blobToBase64,
  extractBlobFromFile,
  isValidBase64,
} from "@/src/helpers";
import { FileFieldInterface } from "@/src/types";

export const Filefield: React.FC<FileFieldInterface> = (props) => {
  const {
    id,
    errormessage,
    isinvalid,
    className,
    value,
    disabled,
    uploadImage,
    onBlur = () => null,
    onChange = () => null,
  } = props;
  const [image, setImage] = useState<string>("/upload_image_placeholder.jpg");
  const parsedValue = value as unknown as File;

  const getImage = useCallback(async () => {
    if (!parsedValue?.name) return "";

    const blob = extractBlobFromFile(parsedValue);
    const base64 = await blobToBase64(blob);

    return base64;
  }, [parsedValue]);

  useEffect(() => {
    getImage().then((imageBase64) => {
      const isValid = isValidBase64(imageBase64);

      if (isValid) {
        setImage(imageBase64);
      }
    });
  }, [getImage, parsedValue]);

  return (
    <div className={twMerge("w-full relative", className)}>
      <label
        htmlFor={disabled ? "" : id}
        className={twMerge(
          "flex w-full h-[200px] items-center justify-center cursor-pointer outline-none rounded-md px-4 pt-2 pb-2 text-slate-600 transition-all bg-white placeholder:text-slate-600",
          (isinvalid && "pb-6") || (disabled && "cursor-default")
        )}
      >
        <img
          alt="foto selecionada do input"
          src={!isEmpty(uploadImage) ? uploadImage : image}
          className={twMerge("object-none", disabled && "opacity-[0.3]")}
          width={0}
          height={0}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </label>
      <input
        id={id}
        name={id}
        onChange={onChange}
        onBlur={onBlur}
        type="file"
        accept="image/png, image/jpeg"
        className="hidden"
      />
      <p className="absolute bottom-0 left-4 text-xs text-red-500 font-semibold text-nowrap animate-pulse">
        {isinvalid && errormessage}
      </p>
    </div>
  );
};
