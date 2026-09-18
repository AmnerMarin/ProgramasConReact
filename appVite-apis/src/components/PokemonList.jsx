import { useEffect, useState } from "react"

function PokemonList() {
  const [pokemonList, setPokemonList] = useState(null) //Al hacer la petición al ednPoint según la página devuelve un objeto con un array denttro
  const [next, setNext] = useState("")
  const [previous, setPrevious] = useState("")
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0");

  function handleAnterior() {
    previous && setUrl(previous); //si previous existe entonces retrocede sino no hace nada
  }
  function handleSiguiente() {
    setUrl(next)
  }

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPokemonList(data)
        //Cuando vemos el console.log(data) vemos estas propiedades
        //next tiene asociado una url
        //previous está como null
        setNext(data.next)
        setPrevious(data.previous)
      })
  }, [url])

  return (
    <div>
      {pokemonList && (
        <div>
          {pokemonList.results.map(pokemon => {
            return <div key={pokemon.name}>{pokemon.name}</div>
          })}
          <button onClick={handleAnterior}>Anterior</button>
          <button onClick={handleSiguiente}>Siguiente</button>

        </div>
      )}
    </div>
  )
}

export default PokemonList
