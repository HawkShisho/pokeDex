import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

export default function PokemonDetail() {
    const { pokemonId } = useParams()
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then(data => data.json())
            .then(data => setPokemon(data))
    }
    , [pokemonId])

  return (
    <div>{JSON.stringify(pokemon)}</div>
  )
}
