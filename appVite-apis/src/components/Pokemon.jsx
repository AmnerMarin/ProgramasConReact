import { useEffect, useState } from "react";

function Pokemon() {
  const [pokemon, setPokemon] = useState();
  const [id, setId] = useState(1);

  function handleSiguiente() {
    setId(id + 1);
  }

  function handleAnterior() {
    id > 1 && setId(id - 1);
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPokemon(data);
      });
  }, [id]);

  return (
    <div>
      {" "}
      {pokemon && (
        <div>
          <h2>
            {pokemon.name} con {pokemon.id}
          </h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <br></br>
          {
            id > 1 ? <button onClick={handleAnterior}>Anterior</button> : <button onClick={handleAnterior} disabled>Anterior</button>
          }
          <button onClick={handleSiguiente}>Siguiente</button>
        </div>
      )}
    </div>
  );
}

export default Pokemon;
