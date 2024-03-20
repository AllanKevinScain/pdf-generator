import { PastoralCardInterface } from "@src/types";
import { Link } from "react-router-dom";

export function CurrentPastoralCard(props: PastoralCardInterface) {
  const { name = "Curso de Liderança Juvenil", targetingLink = "/" } = props;
  return (
    <Link to={targetingLink} target="_self" className="flex">
      <div className="flex w-full items-center justify-center rounded-md bg-logo-1 text-slate-900 p-5 space-y-3 hover:ring-2 hover:ring-primary-600">
        <span className="text-xl font-medium">{name}</span>
      </div>
    </Link>
  );
}
