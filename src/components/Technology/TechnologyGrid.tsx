import type { Dispatch, SetStateAction } from "react";
import type TechDataTypes from "../../types/TechStackTypes";
import TechnologyItem from "./TechnologyItem";

interface TechnologyGridProps {
  techItems: TechDataTypes[];
  selectedStack: TechDataTypes[];
  setSelectedStack: Dispatch<SetStateAction<TechDataTypes[]>>;
}

const TechnologyGrid = ({
  techItems,
  selectedStack,
  setSelectedStack,
}: TechnologyGridProps) => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {techItems.map((technology) => (
          <TechnologyItem
            key={technology.id}
            technology={technology}
            selectedStack={selectedStack}
            setSelectedStack={setSelectedStack}
          />
        ))}
      </div>
    </section>
  );
};

export default TechnologyGrid;
