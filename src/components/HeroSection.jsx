import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const HeroSection = ({ searchText, setSearchText }) => {
  //   const { isLoading, error, data } = useQuery("pokeData", () =>
  //     fetch("https://pokeapi.co/api/v2/pokemon").then(
  //       (res) => res.json(),
  //       setPokemonData(data?.results)
  //     )
  //   );

  //   const { isLoading, error, data } = useQuery("pokeData", async () => {
  //     const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
  //     return response.data.results;
  //   });

  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [URL, setURL] = useState("https://pokeapi.co/api/v2/pokemon");
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();

  const pokemonFunction = async () => {
    setLoading(true);
    const res = await axios.get(URL);
    setNext(res?.data?.next);
    setPrev(res?.data?.previous);
    getPokemon(res?.data?.results);
    console.log(res.data.results);
    setLoading(false);
  };

  //   const getPokemon = async (res) => {
  //     res?.map(async (item) => {
  //       const result = await axios.get(item?.url);
  //       setPokemonData((state) => {
  //         state = [...state, result.data];
  //         return state;
  //       });
  //     });
  //   };

  const getPokemon = async (res) => {
    const pokemonDetails = await Promise.all(
      res.map(async (item) => {
        const result = await axios.get(item?.url);
        return result.data;
      })
    );

    setPokemonData(pokemonDetails);
  };

  useEffect(() => {
    pokemonFunction();
  }, [URL]);

  return (
    <>
      <div className="flex mt-3 md:mx-[300px] gap-4 justify-center items-center  flex-wrap ">
        <Card
          searchText={searchText}
          pokemonData={pokemonData}
          loading={loading}
        />
      </div>
      <div className="md:mx-[300px] pr-[70px] my-4 flex gap-4 justify-end ">
        <button
          onClick={() => {
            setPokemonData([]);
            setURL(prev);
          }}
          className="bg-[#eec855] text-white rounded-[20px] px-4 py-3    "
        >
          {"<"}
        </button>
        <button
          onClick={() => {
            setPokemonData([]);
            setURL(next);
          }}
          className="bg-[#eec855] text-white rounded-[20px] px-4 py-3  "
        >
          {">"}
        </button>
      </div>
    </>
  );
};

export default HeroSection;
