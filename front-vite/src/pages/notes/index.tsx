import { NewPdfCard, PdfCard } from "@src/components";
import { useHref, useNote, usePdfEcc } from "@src/hooks";
import { PdfEccSchemaType } from "@src/types";
import { isEmpty } from "lodash";
import { useCallback, useEffect, useState } from "react";

export function Notes() {
  const { href } = useHref();
  const { createNote, getNotes, deleteNote } = useNote();
  const [pdfs, setPdfs] = useState<PdfEccSchemaType[]>([]);
  const { createPdf } = usePdfEcc({ pdfs });

  const handleNotes = useCallback(async () => {
    const req: PdfEccSchemaType[] = await getNotes();

    setPdfs(req);
  }, [getNotes]);

  async function saveNote(pdf: PdfEccSchemaType) {
    await createNote(pdf);
    await handleNotes();
  }
  async function excludeNote(value: string) {
    await deleteNote(value);
    await handleNotes();
  }

  useEffect(() => {
    handleNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-3 md:px-0">
      <h1 className="text-3xl text-primary-700">
        {href?.toLocaleUpperCase()} NOTES
      </h1>
      <NewPdfCard saveNote={saveNote} />
      <div className="h-px bg-primary-700" />
      {!isEmpty(pdfs) &&
        pdfs?.map((i) => {
          return (
            <PdfCard
              {...i}
              key={`${i.herName}-${i.hisName}-${i.created_at}`}
              onDownloadPdf={createPdf}
              onDeleteNote={excludeNote}
            />
          );
        })}
      {isEmpty(pdfs) && (
        <span className="text-sm font-medium text-primary-700">
          Nenhuma nota cadastrada!
        </span>
      )}
    </div>
  );
}
