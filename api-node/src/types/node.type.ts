import { Request } from "express";
import { noteSchema } from "../schemas";
import { z } from "zod";

type NoteType = z.infer<typeof noteSchema> & {
  id?: string;
};

type CutIdNoteType = Pick<NoteType, "id">;
type CreatNoteType = NoteType & {
  hisContentType?: string;
  herContentType?: string;
};

export type CreateNodeRequestInterface = Request<
  unknown,
  unknown,
  CreatNoteType
>;
export type EditNodeRequestInterface = Request<
  unknown,
  unknown,
  NoteType,
  CutIdNoteType
>;
export type DeleteNodeRequestInterface = Request<
  unknown,
  unknown,
  unknown,
  CutIdNoteType
>;
export type GetOneNodeRequestInterface = Request<
  unknown,
  unknown,
  unknown,
  CutIdNoteType
>;
