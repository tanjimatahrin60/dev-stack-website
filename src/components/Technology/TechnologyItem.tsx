import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import type TechDataTypes from "../../types/TechStackTypes";

interface TechnologyItemProps {
  technology: TechDataTypes;
  selectedStack: TechDataTypes[];
  setSelectedStack: Dispatch<SetStateAction<TechDataTypes[]>>;
}

const TechnologyItem = ({
  technology,
  selectedStack,
  setSelectedStack,
}: TechnologyItemProps) => {
  const alreadyAdded = selectedStack.some(
    (stackItem) => stackItem.id === technology.id,
  );

  const addTechnology = () => {
    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`, {
        position: "bottom-right",
        autoClose: 2000,
        theme: "light",
      });

      return;
    }

    setSelectedStack((currentStack) => [...currentStack, technology]);

    toast.success(
      `${technology.name} has been successfully added to your stack.`,
      {
        position: "bottom-right",
        autoClose: 2000,
        theme: "light",
      },
    );
  };

  return (
    <article className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col justify-between h-full hover:shadow-md transition-shadow">
      <div>
        <div className="flex justify-between items-start mb-4">
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-10 h-10 object-contain"
          />

          {technology.badge && (
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {technology.badge}
            </span>
          )}
        </div>

        <h2 className="text-xl font-bold text-slate-900 mb-2">
          {technology.name}
        </h2>

        <p className="text-sm text-slate-500 mb-6 leading-relaxed">
          {technology.description}
        </p>

        <div className="flex justify-between items-center text-xs text-slate-500 mb-6">
          <span className="font-medium text-slate-700">
            {technology.category}
          </span>

          <span className="font-medium text-slate-700">{technology.level}</span>

          <span className="font-semibold text-orange-500 flex items-center gap-1">
            ★ {technology.rating}
          </span>
        </div>
      </div>

      <button
        onClick={addTechnology}
        disabled={alreadyAdded}
        className={`w-full py-2.5 rounded-xl font-medium text-sm transition-colors ${
          alreadyAdded
            ? "bg-slate-200 text-slate-400 cursor-not-allowed"
            : "bg-slate-800 text-white hover:bg-slate-700 cursor-pointer"
        }`}
      >
        {alreadyAdded ? "Already Added" : "Add Technology"}
      </button>
    </article>
  );
};

export default TechnologyItem;
