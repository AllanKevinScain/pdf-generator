import * as Dialog from "@radix-ui/react-dialog";
import { Input, RowContainer } from "@src/components";
import { X } from "lucide-react";

export function NewPastoralCard() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex w-full items-center justify-center rounded-md bg-logo-1 text-slate-900 p-5 space-y-3 hover:ring-2 hover:ring-primary-600">
        <span className="text-xl font-medium">Nova pastoral</span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/60" />
        <Dialog.Content className="fixed inset-0 flex flex-col w-full max-w-[840px] bg-fundos-800 outline-none md:left-1/2 md:top-1/2 md:inset-auto md:rounded-md md:-translate-x-1/2 md:-translate-y-1/2 md:h-[80vh]">
          <Dialog.Close className="absolute right-2 top-2 bg-fundos-950 p-1.5 text-slate-400 rounded-lg hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>

          <form className="flex flex-col gap-4 p-12 scrollbar-y">
            <RowContainer className="flex-col border rounded-lg p-1">
              <h1 className="flex justify-center">
                ENCONTRO DE CASAIS COM CRISTO - ECC
              </h1>
              <Input.default
                id="name"
                disabled={false}
                isinvalid={false}
                placeholder="Nome da pastoral"
              />
              <button
                type="submit"
                className="bg-logo-1 text-slate-900 hover:ring-2 hover:ring-primary-600 rounded-lg py-2"
              >
                Cadastrar Pastoral
              </button>
            </RowContainer>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
