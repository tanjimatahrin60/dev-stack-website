import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/Technology/TechnologySection";
import MyStackPanel from "./components/Technology/MyStackPanel";
import type TechDataTypes from "./types/TechStackTypes";
import { toast } from "react-toastify";
import TechnologyHeader from "./components/Technology/TechnologyHeader";

const loadTechnologyData = async (): Promise<TechDataTypes[]> => {
  const response = await fetch("/data.json");
  const technologyData = await response.json();

  return technologyData;
};

function App() {
  const [technologyPromise] = useState(() => loadTechnologyData());

  const [selectedStack, setSelectedStack] = useState<TechDataTypes[]>([]);

  const removeTechnology = (id: number) => {
    const removedTechnology = selectedStack.find(
      (technology) => technology.id === id,
    );

    setSelectedStack(
      selectedStack.filter((technology) => technology.id !== id),
    );

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from stack.`, {
        position: "bottom-right",
        autoClose: 2000,
        theme: "light",
      });
    }
  };

  const clearTechnologyStack = () => {
    setSelectedStack([]);

    toast.error("Cleared all technologies from stack.", {
      position: "bottom-right",
      autoClose: 2000,
      theme: "light",
    });
  };

  return (
    <main className="w-full pb-12">
      <Navbar />
      <Hero />
      <TechnologyHeader />

      <div className="container mx-auto px-4 lg:px-8 mt-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <Suspense
              fallback={
                <p className="text-center py-10 font-medium">
                  Technologies Data Loading...
                </p>
              }
            >
              <TechnologySection
                techPromise={technologyPromise}
                selectedStack={selectedStack}
                setSelectedStack={setSelectedStack}
              />
            </Suspense>
          </div>

          <div className="lg:col-span-1">
            <MyStackPanel
              selectedStack={selectedStack}
              onRemove={removeTechnology}
              onRemoveAll={clearTechnologyStack}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
