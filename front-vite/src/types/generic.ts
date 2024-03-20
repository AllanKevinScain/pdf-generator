export type NoteType = {
  id: string;
  date: Date;
  content: string;
};
export interface ResponseInterface extends Response {
  success: boolean;
  imageUploadURL?: {
    her: string;
    his: string;
  };
}
