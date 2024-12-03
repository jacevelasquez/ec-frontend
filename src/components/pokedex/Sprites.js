import React, { useEffect, useState } from "react";
import { capitalizeFirstLetter, formatNumber } from "../../functions/utils";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Sprites() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const gens = [
    { label: "Gen 1", menu: "menu1", simplified: "gen1" },
    { label: "Gen 2", menu: "menu2", simplified: "gen2" },
    { label: "Gen 3", menu: "menu3", simplified: "gen3" },
    { label: "Gen 4", menu: "menu4", simplified: "gen4" },
    { label: "Gen 5", menu: "menu5", simplified: "gen5" },
    { label: "Gen 6", menu: "menu6", simplified: "gen6" },
    { label: "Gen 7", menu: "menu7", simplified: "gen7" },
    { label: "Gen 8", menu: "menu8", simplified: "gen8" },
  ];

  const fetchSpriteData = async (gen) => {
    setLoading(true);
    setError(null);
    try {
      // Fetch Pokémon list for Gen 1
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/" + id
      );
      console.log(response.data);
      const filteredData = {
        name: capitalizeFirstLetter(response["data"]["name"]),
        id: formatNumber(response["data"]["id"]),
        gen1: response["data"]["sprites"]["versions"]["generation-i"]["yellow"][
          "front_default"
        ],
        gen2: response["data"]["sprites"]["versions"]["generation-ii"]["gold"][
          "front_default"
        ],
        gen3: response["data"]["sprites"]["versions"]["generation-iii"][
          "emerald"
        ]["front_default"],
        gen4: response["data"]["sprites"]["versions"]["generation-iv"][
          "platinum"
        ]["front_default"],
        gen5: response["data"]["sprites"]["versions"]["generation-v"][
          "black-white"
        ]["front_default"],
        gen6: response["data"]["sprites"]["versions"]["generation-vi"]["x-y"][
          "front_default"
        ],
        gen7: response["data"]["sprites"]["other"]["home"]["front_default"],
        gen8: response["data"]["sprites"]["other"]["showdown"]["front_default"],
      };
      console.log(filteredData);
      setPokeData(filteredData);
    } catch (err) {
      console.error("Error fetching data:", err); // Log error to the console for better debugging
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSpriteData();
  }, [id]);

  return (
    <div className="bg-[url('/public/venonat-bg.png')] bg-repeat bg-center h-screen">
      <div className="pokedex">
        <div className="flex h-[50px] pokedex-header shadow-md text-center justify-between items-center text-lg px-4">
          <p>{pokeData.name} Sprites</p>
          <div className="flex space-x-4">
            <Link to="/">
              Home
            </Link>
            <Link to="/pokedex">
              Back
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap h-[250px] bg-white items-center justify-center">
          {gens.map((item, index) => (
            <div key={index} className="m-2 p-2">
              <img
                src={
                  pokeData[item.simplified]
                    ? pokeData[item.simplified]
                    : "https://via.placeholder.com/100x100?text=No+Sprite"
                }
                alt={pokeData.name}
                className="w-20 h-20 object-contain"
              />
              <p className="text-sm  text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sprites;
