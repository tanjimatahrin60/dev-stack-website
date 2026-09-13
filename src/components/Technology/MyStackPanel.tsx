import { FiTrash2 } from "react-icons/fi";
import type TechDataTypes from "../../types/TechStackTypes";

interface MyStackPanelProps {
  selectedStack: TechDataTypes[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

const MyStackPanel = ({
  selectedStack,
  onRemove,
  onRemoveAll,
}: MyStackPanelProps) => {
  const stackCount = selectedStack.length;

  return (
    <aside className="bg-slate-50 rounded-3xl border border-slate-200 shadow-sm p-6 sticky top-6">
      <div className="mb-4">
        <h2 className="font-bold text-xl text-slate-900 mb-1">
          My Technology Stack
        </h2>

        <p className="text-xs text-slate-400">
          {stackCount}{" "}
          {stackCount === 1 ? "Technology Selected" : "Technologies Selected"}
        </p>
      </div>

      {stackCount === 0 ? (
        <div className="text-center py-10 border border-dashed border-slate-300 rounded-2xl mt-4">
          <p className="text-xs text-slate-400 mb-2">
            No technology has been selected.
          </p>

          <p className="text-sm font-medium text-slate-400">
            Your stack is currently empty.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-1">
          {selectedStack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between gap-3 p-3 bg-white border border-slate-200 rounded-2xl shadow-sm"
            >
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-8 h-8 object-contain shrink-0"
                />

                <div className="min-w-0">
                  <p className="font-semibold text-sm text-slate-900 truncate">
                    {technology.name}
                  </p>

                  <span className="text-[11px] text-slate-400">
                    {technology.category}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onRemove(technology.id)}
                className="text-slate-400 hover:text-red-500 p-1 cursor-pointer transition-colors shrink-0"
                title="Remove technology"
              >
                <FiTrash2 />
              </button>
            </div>
          ))}

          <div className="mt-4">
            <button
              onClick={onRemoveAll}
              className="w-full py-2.5 border border-rose-200 text-rose-500 hover:bg-rose-50 font-medium text-sm rounded-xl transition-colors cursor-pointer"
            >
              Clear All Technologies
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};

export default MyStackPanel;
