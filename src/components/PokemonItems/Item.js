import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import styles from './styles'

const handleItemSelected = (params) => {
  const navigateParams = {
    pokeName: params.pokeName,
    url: params.url,
    urlImage: params.urlImage,
    index: params.index
  }
  params.navigation.navigate('PokemonDetails', navigateParams)
}

export default (props) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handleItemSelected(props)}
    >
      <View style={styles.imageView}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: props.urlImage
          }}
          defaultSource={require('../../../assets/icon.png')}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.name}>{props.pokeName}</Text>
      </View>
    </TouchableOpacity>
  )
}
