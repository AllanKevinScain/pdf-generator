import { PastoralCard } from "@src/components";
import { usePastoral } from "@src/hooks";
import { PastoralType } from "@src/types";
import { isEmpty } from "lodash";
import { useCallback, useEffect, useState } from "react";

export function App() {
  const { getPastorals } = usePastoral();
  const [pastorals, setPastorals] = useState<PastoralType[]>([]);

  const pushPastorals = useCallback(async () => {
    const req = await getPastorals();

    setPastorals(req);
  }, [getPastorals]);

  useEffect(() => {
    pushPastorals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 md:px-0">
      <div className="h-px bg-primary-700" />

      <div className="grid grid-cols-1 auto-rows-[250px] gap-6 md:grid-cols-2 lg:grid-cols-3">
        {!isEmpty(pastorals) &&
          pastorals.map((i) => (
            <PastoralCard.current
              key={i.id}
              targetingLink={i.name.toLowerCase()}
              {...i}
            />
          ))}
        {isEmpty(pastorals) && (
          <span className="text-sm font-medium text-primary-700">
            Nenhuma pastroal cadastrada
          </span>
        )}
      </div>
    </div>
  );
}
