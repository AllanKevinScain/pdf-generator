import { UUID } from "crypto";

export type PastoralType = {
  id?: UUID;
  name: string;
};

export interface PastoralCardInterface extends PastoralType {
  targetingLink: string;
}
