const Card = ({ pokemonData, loading, searchText }) => {
  const filteredPokemon = pokemonData.filter((pokemon) =>
    pokemon?.name?.toLowerCase().includes(searchText?.toLowerCase())
  );

  return (
    <>
      {filteredPokemon.length === 0 && <p>No matching Pokemon found.</p>}
      {filteredPokemon.map((val, ind) => (
        <div
          key={ind}
          className="card cursor-pointer hover:scale-110 transition-all p-4 flex justify-center items-center flex-col bg-white rounded-md shadow-md w-[200px] h-[200px] bg-slate-600 "
        >
          <img
            className="w-[100px] h-[100px]"
            src={val?.sprites.front_default}
            alt=""
          />
          {val?.name}
          <div className="flex mt-2 w-[100%] justify-between">
            <div className="flex flex-col justify-center items-center">
              <span>{val?.weight}</span>
              <p className="text-[12px] text-gray-500 ">Weight</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span>{val?.height}</span>
              <p className="text-[12px] text-gray-500  ">Height</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
