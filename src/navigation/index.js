import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import PokemonList from '../screens/PokemonList/PokemonList'
import PokemonDetails from '../screens/PokemonDetails/PokemonDetails'

export default function Navigation () {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createStackNavigator()

function RootNavigator () {
  return (
    <Stack.Navigator
      initialRouteName='PokemonList'
    >
      <Stack.Screen options={{ title: 'Lista de Pokemons' }} name='PokemonList' component={PokemonList} />
      <Stack.Screen options={{ title: 'Detalles de Pokemon' }} name='PokemonDetails' component={PokemonDetails} />
    </Stack.Navigator>
  )
}
