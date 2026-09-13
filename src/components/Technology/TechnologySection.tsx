import { use } from "react";
import type { Dispatch, SetStateAction } from "react";
import type TechDataTypes from "../../types/TechStackTypes";
import TechnologyGrid from "./TechnologyGrid";

interface TechnologySectionProps {
  techPromise: Promise<TechDataTypes[]>;
  selectedStack: TechDataTypes[];
  setSelectedStack: Dispatch<SetStateAction<TechDataTypes[]>>;
}

const TechnologySection = ({
  techPromise,
  selectedStack,
  setSelectedStack,
}: TechnologySectionProps) => {
  const techItems = use(techPromise);

  return (
    <TechnologyGrid
      techItems={techItems}
      selectedStack={selectedStack}
      setSelectedStack={setSelectedStack}
    />
  );
};

export default TechnologySection;
