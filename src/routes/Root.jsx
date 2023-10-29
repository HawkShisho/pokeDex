import { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Card, Grid, CardContent, Box} from '@mui/material'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useNavigate } from 'react-router-dom'


function App() {
  const [pokemons, setPokemons] = useState([])
  let name = '';

  const navigate = useNavigate();

  const handleClick = (e) => {
  name = e.currentTarget.id;
  console.log(name);
  navigate("/pokemons/"+name)

  }
  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(data => data.json())
      .then(data => setPokemons(data.results))
  }, [])


  return (
    <>
      <h1>PokeDex</h1>
      <nav></nav>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {pokemons.map((pokemon, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Card sx={{ maxWidth: 280, maxHeight: 280}} style={{backgroundColor: "lightGrey"}} id={pokemon.name} onClick={handleClick}>
                <Box sx={{display: 'flex', allignContent:'center', justifyContent:'center', textAlign:'center'}}>
                  <CardContent>
                    <h2>
                      {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                    </h2>
                    <LazyLoadImage
                      alt={pokemon.name}
                      height={200}
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                      width={200}
                    />
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default App
