import React, { useEffect, useState } from "react";
import PokeInfo from "./pokedex/PokeInfo";
import SpriteGallery from "./pokedex/Sprite";

function Pokedex() {
  const [activeMenu, setActiveMenu] = useState("menu1");

  // Function to handle menu clicks
  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
  };

  const menus = [
    { label: "Pokedex", menu: "menu1" },
    { label: "Sprites", menu: "menu2" },
    { label: "Types", menu: "menu3" },
    { label: "Ability", menu: "menu4" },
    { label: "About", menu: "menu5" },
  ];
  return (
    <div className="mr-40 ml-40">
      <div className="flex h-[50px] bg-yellow-50 shadow-md">
        {menus.map((item, index) => (
          <div
            key={index}
            className={`w-1/5 flex items-center justify-center text-center cursor-pointer transition-colors duration-200 
                  ${
                    activeMenu === item.menu
                      ? "bg-yellow-300 text-gray-800 font-bold"
                      : "bg-yellow-100 text-gray-600 hover:bg-yellow-200"
                  }`}
            onClick={() => handleMenuClick(item.menu)}
          >
            <p className="text-lg">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="flex h-[700px] bg-blue-100">
        {activeMenu === "menu1" && <PokeInfo />}
        {activeMenu === "menu2" && <SpriteGallery />}
        {activeMenu === "menu3" && <div>Types Component</div>}
        {activeMenu === "menu4" && <div>Ability Component</div>}
        {activeMenu === "menu5" && <div>About Component</div>}
      </div>
    </div>
  );
}

export default Pokedex;
