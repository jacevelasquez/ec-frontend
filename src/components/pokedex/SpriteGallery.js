import React, { useEffect, useState } from "react";
import { Link  } from 'react-router-dom';
import axios from "axios";
import { handleMenuClick, capitalizeFirstLetter } from "../../functions/utils";

function SpriteGallery() {
  const [activeMenu, setActiveMenu] = useState("menu1");

  const gens = [
    { label: "Gen 1", menu: "menu1" },
    { label: "Gen 2", menu: "menu2" },
    { label: "Gen 3", menu: "menu3" },
    { label: "Gen 4", menu: "menu4" },
    { label: "Gen 5", menu: "menu5" },
    { label: "Gen 6", menu: "menu6" },
    { label: "Gen 7", menu: "menu7" },
    { label: "Gen 8", menu: "menu8" },
    { label: "Gen 9", menu: "menu9" },
  ];

  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGenPokemons = async (gen) => {
    setLoading(true);
    setError(null);
    try {
      // Fetch Pokémon list for Gen 1
      const response = await axios.get("https://pokeapi.co/api/v2/generation/"+gen);

      const pokemons = response.data.pokemon_species;
      
      // Fetch sprite data for each Pokémon in Gen 1
      const spritesData = await Promise.all(
        pokemons.map(async (pokemon) => {
          const urlsplice = pokemon.url.split('/');
          const pokemonNumber = urlsplice[urlsplice.length-2];
          const pokemonDetails = await axios.get("https://pokeapi.co/api/v2/pokemon/"+pokemonNumber);
          
          // Check if sprite data exists
          const sprite = pokemonDetails.data.sprites?.front_default;

          return {
            name: capitalizeFirstLetter(pokemon.name),
            number: Number(pokemonNumber),
            sprite: sprite ? sprite : "https://via.placeholder.com/100x100?text=No+Sprite", // Placeholder if no sprite
          };
        })
      );
      const sortedData = spritesData.sort((a, b) => a.number - b.number);

      setPokeData(sortedData);
    } catch (err) {
      console.error("Error fetching data:", err); // Log error to the console for better debugging
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    gens.forEach((item, index) => {
      if (activeMenu === item.menu) {
        fetchGenPokemons(index + 1); // Fetch Gen 1 Pokémon sprites when the Gen 1 menu is selected
      }
    });
  }, [activeMenu]);

  return (
    <div className="p-5 w-full">
      <div className="flex h-[50px] pokedex-header shadow-md">
        {gens.map((item, index) => (
          <div
            key={index}  // Use index as a last resort
            className={`flex-grow flex items-center justify-center text-center cursor-pointer transition-all duration-300 ease-in-out 
              ${activeMenu === item.menu
                ? "bg-violet-300 text-gray-800 font-bold scale-105 shadow-lg"
                : "bg-violet-200 text-gray-600 hover:bg-violet-400"
              }`}
            onClick={() => handleMenuClick(item.menu, setActiveMenu)}
          >
            <p className="text-lg px-4">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="flex p-5">
        {gens.map((item, index) => ( activeMenu === item.menu && (
          <div className="flex flex-wrap justify-center w-full overflow-y-auto max-h-[500px]">
            {loading && <div>
                          <p>Loading Gen {index+1} Pokémon...</p>
                          <img src="/pokeball-loading.gif" />
                        </div>}
            {error && <p>{error}</p>}

            {/* Display Pokémon sprites for Gen 1 */}
            {!loading &&
              pokeData.map((pokemon, index) => (
                <div key={index} className="m-4 p-2 text-center">
                <Link 
                  to={`/sprites/${pokemon.number}`}>
                  <img
                    src={pokemon.sprite}
                    alt={pokemon.name}
                    className="w-22 h-22 mb-2"
                  />
                  <p className="text-sm">{pokemon.name}</p>
                </Link>
                </div>
              ))}
          </div>
        )))}
      </div>
    </div>
  );
}

export default SpriteGallery;
