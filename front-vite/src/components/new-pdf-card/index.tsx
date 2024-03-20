import { PdfEccInitalValues } from "@asset/constants";
import { PdfEccSchema } from "@asset/schemas";
import * as Dialog from "@radix-ui/react-dialog";
import { PdfForm } from "@src/components";
import { NewPdfCardInterface, PdfEccSchemaType } from "@src/types";
import { useFormik } from "formik";
import { Plus, X } from "lucide-react";
import { useState } from "react";

export function NewPdfCard(props: NewPdfCardInterface) {
  const { saveNote } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOpenDialog() {
    setIsOpen((s) => !s);
  }

  const formikValues = useFormik<PdfEccSchemaType>({
    onSubmit: (values) => {
      saveNote(values);
      handleOpenDialog();
    },
    initialValues: PdfEccInitalValues,
    validationSchema: PdfEccSchema,
    validateOnChange: true,
    validateOnBlur: true,
  });

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenDialog}>
      <Dialog.Trigger className="flex rounded-md gap-3 p-3 bg-logo-1 text-slate-900 hover:ring-2 hover:ring-primary-600">
        <Plus className="size-5" />
        <span className="text-sm font-medium">Adicionar nota</span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/60" />
        <Dialog.Content className="fixed inset-0 flex flex-col w-full max-w-[840px] bg-fundos-800 outline-none md:left-1/2 md:top-1/2 md:inset-auto md:rounded-md md:-translate-x-1/2 md:-translate-y-1/2 md:h-[80vh]">
          <Dialog.Close className="absolute right-2 top-2 bg-fundos-950 p-1.5 text-slate-400 rounded-lg hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>

          <PdfForm {...formikValues} hasSaveButton />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
