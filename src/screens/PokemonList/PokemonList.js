import React, { useState, useEffect } from 'react'
import { SafeAreaView, FlatList } from 'react-native'

import RenderItem from '../../components/PokemonItems/PokemonItem'
import { getPokemonList } from '../../services/PokemonService'
import styles from './styles'

const mapData = (pokemons) => {
  return pokemons.map(pokemon => {
    const pokemonIndex = pokemon.url.split('/')[pokemon.url.split('/').length - 2]
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`

    return {
      name: pokemon.name,
      imageUrl,
      index: pokemonIndex,
      url: pokemon.url
    }
  })
}

const PokemonList = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const asyncMethod = async () => {
      const data = await getPokemonList()
      setData(mapData(data))
    }
    asyncMethod()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={item => (
          <RenderItem
            item={item}
            navigation={props.navigation}
          />
        )}
        keyExtractor={item => item.index}
      />
    </SafeAreaView>
  )
}

export default PokemonList
