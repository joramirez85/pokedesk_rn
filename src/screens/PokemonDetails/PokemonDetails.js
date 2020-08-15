import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  Image
} from 'react-native'

import { getPokemonDetails } from '../../services/PokemonService'
import styles from './styles'

const PokemonDetails = (props) => {
  const { route } = props
  const {
    pokeName,
    urlImage,
    index
  } = route.params

  const [data, setData] = useState([])

  const formatAbility = (ability) => {
    return ability
      .toLowerCase()
      .split('-')
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
  }

  const mapData = (data) => {
    const abilities = data.abilities.map(ability => formatAbility(ability.ability.name)).join(',')
    const test = {
      abilities,
      height: data.height,
      weight: data.weight
    }
    console.log('** test: ', test)
    return test
  }

  useEffect(() => {
    const asyncMethod = async () => {
      const data = await getPokemonDetails(index)
      setData(mapData(data))
    }
    asyncMethod()
  }, [])

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: urlImage
        }}
        defaultSource={require('../../../assets/icon.png')}
      />
      <Text style={styles.title}>Name: {pokeName}</Text>
      <Text style={styles.title}>Abilities: {data.abilities}</Text>
      <Text style={styles.title}>Height: {data.height}</Text>
      <Text style={styles.title}>Weight: {data.weight}</Text>
    </View>
  )
}

export default PokemonDetails
