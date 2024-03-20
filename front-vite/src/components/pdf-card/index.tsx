import * as Dialog from "@radix-ui/react-dialog";
import { PdfForm } from "@src/components";
import { PdfCardInterface, PdfEccSchemaType } from "@src/types";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useFormik } from "formik";
import { ArrowDownFromLine, Trash2, X } from "lucide-react";

export function PdfCard(props: PdfCardInterface) {
  const {
    hisName,
    herName,
    created_at,
    id = "",
    onDownloadPdf = () => null,
    onDeleteNote = () => null,
  } = props;

  const formikValues = useFormik<PdfEccSchemaType>({
    onSubmit: () => {},
    initialValues: props,
  });

  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex rounded-md w-full justify-between p-3 outline-none bg-logo-1 text-slate-900 text-sm font-medium hover:ring-2 hover:ring-primary-600">
        <p>{`Casal: ${hisName} e ${herName}   |   Data: ${format(
          created_at!,
          "dd/MM/yyyy"
        )}`}</p>

        <div className="flex items-center gap-2">
          <span
            className="rounded-lg transition-all p-2 hover:text-white hover:bg-slate-900"
            onClick={(e) => {
              e.stopPropagation();
              onDeleteNote(id);
            }}
          >
            <Trash2 className="size-5" />
          </span>
          <span
            className="rounded-lg transition-all p-2 hover:text-white hover:bg-slate-900"
            onClick={(e) => {
              e.stopPropagation();
              onDownloadPdf(id);
            }}
          >
            <ArrowDownFromLine className="size-5" />
          </span>
          <span>
            {formatDistanceToNow(created_at!, {
              locale: ptBR,
              addSuffix: true,
            })}
          </span>
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/60" />
        <Dialog.Content className="fixed flex flex-col w-full max-w-[640px] bg-slate-700 outline-none overflow-hidden md:left-1/2 md:top-1/2 md:inset-auto md:rounded-md md:-translate-x-1/2 md:-translate-y-1/2 md:h-[60vh]">
          <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>

          <PdfForm {...formikValues} allDisabled={true} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
