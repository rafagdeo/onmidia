import React, { useState } from "react";
import Eventos from "./Eventos";
import Intitucional from "./Intitucional";
import Corporativo from "./Corporativo";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="Tabs p-4 md:p-0">
      {/* Lista de Tabs */}
      <ul className="nav flex gap-4 text-white">
        {[
          { id: "tab1", label: "Eventos" },
          { id: "tab2", label: "Institucional" },
          { id: "tab3", label: "Corporativo" },
        ].map((tab) => (
          <li
            key={tab.id}
            className={`cursor-pointer px-4 py-2 transition ${
              activeTab === tab.id ? "uppercase w-full bg-primary border border-primary text-center" : "uppercase w-full text-center border border-white hover:bg-primary hover:border-primary"
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </li>
        ))}
      </ul>

      {/* Conteúdo das Tabs */}
      <div className="outlet mt-4">
        {activeTab === "tab1" && <Eventos />}
        {activeTab === "tab2" && <Intitucional />}
        {activeTab === "tab3" && <Corporativo />}
      </div>
    </div>
  );
};

export default Tabs;
