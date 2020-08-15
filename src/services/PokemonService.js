import axios from 'axios'

const URL = 'https://pokeapi.co/api/v2/pokemon/'

const getPokemonList = async () => {
  try {
    const result = await axios.get(URL)
    return result.data.results
  } catch (error) {
    console.log('There was an error trying to get pokemon data: ', error)
  }
}

const getPokemonDetails = async (pokemonId) => {
  try {
    const urlDetails = URL + pokemonId
    const result = await axios.get(urlDetails)
    return result.data
  } catch (error) {
    console.log('There was an error trying to get pokemon data: ', error)
  }
}

export {
  getPokemonList,
  getPokemonDetails
}
