import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function PokeInfo() {
  const [pokeData, setPokeData] = useState({
      types: [],
      abilities: [],
      height: 0,
      weight: 0,
      stats: [],
      sprites: [],
      "official-artwork": [],
      other: [],
    });
  const [searchBar, setSearchBar] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("Tab1");
  const [isVisible, setIsVisible] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchBar}`
      );
      setPokeData(response.data);
      setIsVisible(true);
      //   console.log(response.data["sprites"]["other"]["official-artwork"]["front_default"])
    } catch (err) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const searchPokemon = (event) => {
    setSearchBar(event.target.value);
  };

  const searchEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission behavior
      fetchData(); // Trigger button click function
    }
  };

  const rawImageBase =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

  // Extract the image filename from the URL
  const getImageFileName = (url) => url?.split("/").pop() || "";

  // Generate image URLs
  const generateImageUrl = (isShiny = false) => {
    const imagePath = isShiny ? "shiny" : "";
    return pokeData?.sprites?.other?.["official-artwork"]?.front_default
      ? `${rawImageBase}/${imagePath}/${getImageFileName(
          pokeData.sprites.other["official-artwork"].front_default
        )}`
      : "";
  };

  // Define image URLs for each tab
  const imageTab = {
    Tab1: generateImageUrl(),
    Tab2: generateImageUrl(true),
  };
  

  return (
    <div className="m-5 p-5">
          <input
            type="text"
            placeholder="search pokemon/number"
            onChange={searchPokemon}
            onKeyDown={searchEnter}
          /> 
          <button onClick={fetchData}>Search</button>
          {isVisible && (<div className="flex p-4">
            {/*  INFO  */}
            <div className="w-[450px] h-[330px] capitalize">
            <h2 className="text-2xl">Pokemon Data</h2>
              <div>
                Name: {pokeData.name} (No. {pokeData.id})
              </div>
              <div className="grid grid-cols-3 gap-0">
                Type:
                {pokeData.types.map((type, index) => (
                  <div key={index} className={type.type.name}>
                    {type.type.name}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-0 truncate">
                Ability:
                {pokeData.abilities.map((ability, index) => (
                  <div key={index} className={`${ability.ability.name}`}>
                    {ability.ability.name} {ability.is_hidden}
                    {ability.is_hidden ? "(H)" : ""}
                  </div>
                ))}
              </div>
              <div>Height: {pokeData.height / 10}m </div>
              <div>Weight: {pokeData.weight / 10}kg</div>
            </div>
            {/*  STATS  */}
            <div className="w-[350px] h-[330px] capitalize">
              <h2 className="text-2xl">Stats</h2>
              {pokeData.stats.map((stat, index) => (
                <div key={index} className="flex">
                  <div className="w-3/4">{stat.stat.name}</div>
                  <div className="w-1/4 mr-auto">: {stat.base_stat}</div>
                </div>
              ))}
            </div>
            {/*  IMAGE  */}
            <div className="w-[250px] h-[250px]">
              <button
                className={`py-2 px-4 text-sm font-medium ${
                  activeTab === "Tab1"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("Tab1")}
              >
                Normal
              </button>
              <button
                className={`py-2 px-4 text-sm font-medium ${
                  activeTab === "Tab2"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("Tab2")}
              >
                Shiny
              </button>

              {/* Image Box */}
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img
                  src={imageTab[activeTab]}
                  alt="Placeholder"
                  className="w-[200px] h-[200px] object-cover rounded"
                />
              </div>
            </div>
          </div>)}
        </div>
  );
}

export default PokeInfo;
